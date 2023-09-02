'use client'
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    const obtenerCategorias = async () => {
        const { data } = await axios('http://localhost:3000/api/categorias')
        setCategorias(data.categorias)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id )
        setCategoriaActual(categoria[0])
    }
    

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual, 
                handleClickCategoria
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext