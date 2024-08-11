import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    console.log("params id here", id);
    const appointment = await prisma.appointment.update({
      where: {
        id: Number(id),
      },
      data: {
        status: "REJECTED",
      },
    });
    return NextResponse.json({ success: true, status: 200, data: appointment });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};