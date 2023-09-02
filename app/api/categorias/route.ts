import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {

    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true, 
        }
    })

    try {
        return NextResponse.json({message: 'OK', categorias}, { status: 200 })
    } catch(err) {
        return NextResponse.json({message: 'Error', err}.err, {
            status: 500,
        })
    }   
};