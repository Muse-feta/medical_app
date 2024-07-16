import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { mailer } from "@/helpers/mailer";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { email } = body;

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        // if user does not exist
        if (!user) {
            return NextResponse.json({ message: "User does not exist" }, { status: 400 });
        }

        // if user exists
        await mailer({ email: email, emailType: "RESET", userId: user.id });

        return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}