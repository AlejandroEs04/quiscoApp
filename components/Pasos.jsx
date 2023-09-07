'use client'
import { useRouter, usePathname } from "next/navigation"

const pasos = [
    {
        paso: 1,
        nombre: 'Menu',
        url: '/'
    },
    {
        paso: 2,
        nombre: 'Resumen',
        url: '/resumen'
    },
    {
        paso: 3,
        nombre: 'Datos y Total',
        url: '/total'
    },
]

const Pasos = () => {
  const router = useRouter()
  const path = usePathname()

  const calcularProgreso = () => {
    let valor 
    if(path === '/') {
      valor = 2
    } else if(path === '/resumen') {
      valor = 50
    } else {
      valor = 100
    }
    return valor
  }

  if(path !== '/admin') {
    return (
      <>
        <div className="flex justify-between mb-5">
          {pasos.map(paso => (
              <button 
                key={paso.paso}
                onClick={() => {
                  router.push(paso.url)
                }}
                className="text-2xl font-bold"
              >
                  {paso.nombre}
              </button>
          ))}
        </div>

        <div className="bg-gray-100 mb-10">
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width: `${calcularProgreso()}%`}}></div>
        </div>
      </>
    )
  }
}

export default Pasos
