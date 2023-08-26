import { PrismaClient } from "@prisma/client"

const fetchCategorias = () => {
  const prisma = new PrismaClient()
  return prisma.categoria.findMany()
}

const fetchProductos = () => {
  const prisma = new PrismaClient()
  return prisma.producto.findMany()
}

export default async function Home() {
  const categorias = await fetchCategorias()
  const productos = await fetchProductos()

  return (
    <h1>Home</h1>
  )
}
