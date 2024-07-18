import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getDataFromToken } from "@/helpers/getDataFromToken";

const prisma = new PrismaClient();


export const GET = async (req: NextRequest) => {

   
    try {
      // const body = await req.json();
      const userId = await getDataFromToken(req);
      console.log("id from me route", userId);
      const user = await prisma.$transaction(async (prisma) => {
        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });

        const userInfo = await prisma.userInfo.findUnique({
          where: {
            userId: userId,
          },
        });

        return { user, userInfo };
      });

      return NextResponse.json({ success: true, status: 200, data: user });
    } catch (error) {
        // console.log("error occuring in me route", error);
        return NextResponse.json({ success: false, status: 500, message: "Something went wrong" });
    }
}