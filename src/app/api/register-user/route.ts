import bcrypt from "bcrypt";

import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

// below POST request is for registration
// using Email Password Credentials...
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if (name === "" || email === "" || password === "") {
      return new NextResponse(`Missing fields..`, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(newUser);
  } catch (error: any) {
    return new NextResponse(`Registration failed!!. Error: ${error}`, {
      status: 500,
    });
  }
}
