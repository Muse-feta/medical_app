import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        // get recent appointments in the last 1 days
        const recentAppointments = await prisma.appointment.findMany({
            where: {
                createdAt: {
                    gte: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
        });
        return NextResponse.json({ success: true, status: 200, data: recentAppointments });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}