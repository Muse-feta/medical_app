import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    // Fetch the current user role
    const user = await prisma.userInfo.findUnique({
      where: { userId: Number(id) },
      select: { role: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Toggle the role
    const newRole = user.role === "ADMIN" ? "USER" : "ADMIN";

    // Update the user role
    const updatedUser = await prisma.userInfo.update({
      where: { userId: Number(id) },
      data: { role: newRole },
    });

    return NextResponse.json(
      { message: "User role updated", user: updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
