import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async(req: NextRequest) => {
    const body = await req.json();
    const { token } = body;
    console.log(token)
    try {
      const user = await prisma.user.findFirst({
        where: {
          forgotPasswordToken: token,
        },
      });

      if (!user) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: "Invalid token",
        });
      }

      // updating user verification token
      await prisma.user.update({
        where: {
          forgotPasswordToken: token,
        },
        data: {
          forgotPasswordToken: null,
          forgotPasswordTokenExpiry: null,
        },
      });

      return NextResponse.json({
        success: true,
        status: 200,
        message: "Token verified",
        userId: user.id,
      });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            status: 500,
            message: "Something went wrong"
        })
    }
}
