import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const GET = async (req: NextRequest) => {
    try {
        const users = await prisma.user.findMany();
        const userInfo = await prisma.userInfo.findMany();
        const usersWithInfo = users.map((user, index) => ({ ...user, ...userInfo[index] }));
        return NextResponse.json({ success: true, status: 200, data: usersWithInfo});
    } catch (error) {
        NextResponse.json({ message: error, status: 500 });
    }
}