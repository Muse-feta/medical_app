import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, status } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // Validate body here if necessary

    // Create an appointment or user
    await prisma.appointment.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Appointment created successfully",
    });
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
     const appointments = await prisma.appointment.findMany({
       where: {
         status: "PENDING",
       },
       orderBy: {
         id: "desc",
       }
     });
    return NextResponse.json({ success: true, status: 200, data: appointments });
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
