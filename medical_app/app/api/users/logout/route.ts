import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
    response.cookies.set({
      name: "token",
      value: "",
    //   maxAge: 0,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
