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

    const res = await prisma.$transaction(async (prisma) => {
      const appointment = await prisma.appointmentInfo.create({
        data: {
          ...body,
          appointmentId: Number(id),
        }
      })

      const user = await prisma.appointment.update({
        where: {
          id: Number(id)
        },
        data: {
          appointmentInfo: {
            connect: {
              id: appointment.id
            }
          }
        }
      })
    })
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};