import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {

    const productos = await prisma.producto.findMany({
        where: {
            categoriaId: 1,
        }
    })

    try {
        return NextResponse.json({message: 'OK', productos}, { status: 200 })
    } catch(err) {
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }   
};