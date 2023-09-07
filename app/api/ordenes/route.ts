import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {
    try {
        const ordenes = await prisma.orden.findMany()
        return NextResponse.json({ordenes}, { status: 200 })
    } catch(err) {
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }   
};

export const POST = async (req: Request, res: Response) => {
    const item = await req.json()

    try {
        const orden = await prisma.orden.create({
            data: {
                nombre: item.nombre,
                total: item.total,
                pedido: item.pedido,
                fecha: item.fecha
            }
        })
        return NextResponse.json({orden}, { status: 200 })
    } catch(err) {
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }   
};

