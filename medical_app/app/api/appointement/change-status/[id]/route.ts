import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { id } = params;
    // console.log("body", body, id);

  const appointment = await prisma.$transaction(async (prisma) => {
      const appointment = await prisma.appointment.update({
        where: {
          id: Number(id),
        },
        data: {
          status: body.status,
        },
      });

      const appStatus = await prisma.appointmentInfo.deleteMany({
        where: {
          appointmentId: Number(id),
        },
      })
      return {
        appointment,
        appStatus,
      };
    });



    return NextResponse.json({ success: true, status: 200, data: appointment });
  } catch (error: any) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
};