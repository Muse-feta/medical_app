import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    try {
      const body = await req.json();

      // check if user exists
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      const userInfo = await prisma.userInfo.findUnique({
        where: {
          userId: user?.id,
        },
      });

      const password = userInfo?.password;

      if (!user) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: "User does not exist",
        });
      }

      if (!password) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: "Invalid password",
        });
      }

      // check if password is correct
      const isPasswordCorrect = await bcryptjs.compare(body.password, password);

      if (!isPasswordCorrect) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: "Incorrect password",
        });
      }

      // check if the user account is verified

      if (!user.isVerified) {
        return NextResponse.json({
          success: false,
          status: 400,
          message: "Please verify your account first",
        });
      }


      //   // create jwt token data

      const tokenData  = {
        id: userInfo?.userId,
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        role: userInfo?.role,
      };

      // sign jwt token
      const token = await jwt.sign(tokenData, process.env.SECRET!, {
        expiresIn: "1d",
      });

      const response = NextResponse.json({
        success: true,
        status: 200,
        message: "Login successful",
        token: token,
      })

      response.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        // sameSite: "strict",
        // maxAge: 1000 * 60 * 60 * 24,
      })

      return response
    } catch (error) {
        NextResponse.json({ success: false,status: 500, error: error });
    }
}