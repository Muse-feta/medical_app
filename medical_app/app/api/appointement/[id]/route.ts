import {  PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const Prisma = new PrismaClient();

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params;
        const appointment = await Prisma.appointment.findMany({
          where: { userId: Number(id) },
        });

        const appInfo = await Prisma.appointmentInfo.findMany({
          where: { appointmentId: { in: appointment.map((appointment) => appointment.id) } },
        });

        const appointmentsWithInfo = appointment.map((appointment) => {
          const info = appInfo.filter(
            (info) => info.appointmentId === appointment.id
          );
          return { ...appointment, info };
        });

        return NextResponse.json({ success: true, status: 200, data: appointmentsWithInfo });
    } catch (error: any) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};