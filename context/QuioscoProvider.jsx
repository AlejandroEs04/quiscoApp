'use client'
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])

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

    const handleSetProducto = (producto) => {
        setProducto(producto)
    }
    
    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        if(pedido.some(productoState => productoState === producto.id)) {
            console.log('el producto ya existe')
        }

        setPedido([...pedido, producto])
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual, 
                handleClickCategoria,
                handleSetProducto,
                producto,
                handleChangeModal,
                modal,
                handleAgregarPedido
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