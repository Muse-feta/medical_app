import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        status: "REJECTED",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      success: true,
      status: 200,
      data: appointments,
    });
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

