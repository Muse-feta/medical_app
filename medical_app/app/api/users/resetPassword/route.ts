import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { token, password } = body;

    // check if token is valid
    const user = await prisma.user.findFirst({
      where: {
        forgotPasswordToken: token,
      },
    });

    // if token is not valid
    if (!user) {
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }

    // updating user verification token
    await prisma.user.update({
      where: {
        forgotPasswordToken: token,
      },
      data: {
        verifyToken: null,
        verifyTokenExpiry: null,
      },
    });

    // hashed password
    const salt = await bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // if token is valid
    const res = prisma.userInfo.update({
      where: {
        userId: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
    
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
