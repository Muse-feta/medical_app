import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const {  password, userId } = body;
    console.log("body of reset password", body);
    // hashed password
    const salt = await bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // if token is valid
    const res = await prisma.userInfo.update({
      where: {
        userId: userId,
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
