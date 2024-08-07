import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, status } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        // first get all the users
        const users = await prisma.user.findMany();

        // get new users in the last 30 days
        const newUsersLast30Days = users.filter((user) => {
            const createdAt = new Date(user.createdAt);
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            return createdAt > thirtyDaysAgo;
        });

        // get all appointments
        const appointments = await prisma.appointment.findMany();

        // get all active appointments
        const activeAppointments = appointments.filter((appointment) => {
            return status[appointment.status] === "PENDING";
        });

        const cardInfo = {
            totalUsers: users.length,
            newUsersLast30Days: newUsersLast30Days.length,
            totalAppointments: appointments.length,
            activeAppointments: activeAppointments.length,
        };

        return NextResponse.json(cardInfo);
        
        
    } catch (error: any) {
        console.log(error.message);
        NextResponse.json({ message: error, status: 500 });
    }
}