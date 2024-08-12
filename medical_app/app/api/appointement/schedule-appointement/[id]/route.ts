import { appointmentEmail } from "@/helpers/appointmentEmail";
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

      const appInfo = await prisma.appointment.findUnique({
        where: {
          id: Number(id),
        },
      });

      // Check if email and patientName are defined before sending an email
      const email = appInfo?.email;
      const patientName = appInfo?.patientName;
      const date = body.date;

      if (email && patientName && date) {
        // Send email to patient
        await appointmentEmail(email, patientName, date);
      } else {
        console.error("Email or patient name is missing, email not sent.");
      }
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

