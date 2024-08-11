import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        status: "ACCEPTED",
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const appInfo = await prisma.appointmentInfo.findMany({
      where: {
        appointmentId: {
          in: appointments.map((appointment) => appointment.id),
        },
      },
    });

    const appointmentsWithInfo = appointments.map((appointment) => {
      const info = appInfo.filter(
        (info) => info.appointmentId === appointment.id
      );
      return { ...appointment, info };
    });

    return NextResponse.json({
      success: true,
      status: 200,
      data: appointmentsWithInfo,
    });
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
