import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { id } = params;

    const appointment = await prisma.$transaction(async (prisma) => {
      const appointment = await prisma.appointmentInfo.create({
        data: {
          ...body,
          appointmentId: Number(id),
        },
      });
      const appStatus = await prisma.appointment.update({
        where: {
          id: Number(id),
        },
        data: {
          status: "ACCEPTED",
        },
      });
      return {
        appointment,
        appStatus,
      };
    })

    return NextResponse.json({ success: true, status: 200, data: appointment });

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

