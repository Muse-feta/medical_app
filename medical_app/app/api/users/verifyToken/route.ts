import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { token } = body;

        // check if token is valid
        const user = await prisma.user.findFirst({
          where: {
            verifyToken: token,
          },
        });

        // if token is not valid
        if(!user){
            return NextResponse.json({ message: "Invalid token" }, { status: 400 });
        }

        // if token is valid
        return NextResponse.json({ message: "Token verified successfully" }, { status: 200 });
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}