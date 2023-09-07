'use client'
import { useEffect, useCallback } from "react"
import useQuiosco from '../../hooks/useQuiosco'
import { formatearDinero } from '../../helpers/index'

function TotalPage() {

  const { pedido, setNombre, nombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <>
      <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>
      <p className='text-2xl my-10'>Confirma tu Pedido a Continuacion</p>

      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label className='block uppercase text-slate-800 font-bold text-xl' htmlFor='nombre'>
            Nombre
          </label>

          <input 
            type='text'
            className='bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md'
            id='nombre'
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
          />
        </div>

        <div className='mt-10'>
          <p className='text-2xl'>Total a pagar {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
        </div>

        <div className='mt-5'>
          <input 
            className={`${comprobarPedido() ? 'bg-indigo-100 text-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-800' } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold  text-center`}
            value={"Confirmar Pedido"}
            type="submit"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </>
  )
}

export default TotalPage
