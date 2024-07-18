import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const cookies = req.cookies;
    console.log("Cookies received:", cookies);

    const token = cookies.get("token")?.value || "";
    if (!token) {
      console.error("Token not found in cookies");
      return null;
    }

    const data: any = Jwt.verify(token, process.env.SECRET!);
    console.log("Data from getDataFromToken:", data);
    return data.id;
  } catch (error: any) {
    console.error("Error in getDataFromToken:", error.message);
    throw new Error(error.message);
  }
};
