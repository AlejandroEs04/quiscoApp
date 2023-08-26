import { NextResponse } from "next/server"

export default function handler(req, res) {
    const jsonResponse = Response.json({ my: "data" });
    logResponse(jsonResponse);
}