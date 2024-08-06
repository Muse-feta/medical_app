import {  PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const Prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params;
        const appointment = await Prisma.appointment.findMany({
          where: { userId: Number(id) },
        });
        return NextResponse.json({ success: true, status: 200, data: appointment });
    } catch (error: any) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};