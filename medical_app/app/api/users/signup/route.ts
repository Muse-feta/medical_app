import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { mailer } from "@/helpers/mailer";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    // console.log("body", body);

    // check if user already exists
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "User already exists",
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(body.password, salt);

    const newUser = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          firstname: body.firstname,
          lastname: body.lastname,
          email: body.email,
        },
      });
      const userInfo = await prisma.userInfo.create({
        data: {
          userId: user.id,
          password: hashedPassword,
          phone: body.phone,
        },
      });
      return user;
    });

    // send verification email
    await mailer({ email: body.email, emailType: "VERIFY", userId: newUser.id });

    return NextResponse.json({
      success: true,
      status: 201,
      message: "User created successfully",
      data: {
        newUser,
      },
    });
  } catch (error: any) {
    console.log("error occurring in server", error.message);
    NextResponse.json({ success: false, status: 500, message: error.message });
  }
};
