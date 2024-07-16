import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { mailer } from "@/helpers/mailer";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        console.log(body);
        const { email, userId } = body;

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            return NextResponse.json({ message: "Invalid email" }, { status: 400 });
        }

        // reset verification token
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                verifyToken: null,
                verifyTokenExpiry: null
            }
        });

        // send email
        mailer({ email: email, emailType: "VERIFY", userId: userId });

        return NextResponse.json({ message: "Verification email sent" }, { status: 200 });

    } catch (error: any) {
        console.log(error.message);
        NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}