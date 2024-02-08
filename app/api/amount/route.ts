import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request
) {
  try {

    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const {
      amount,
      currency,
      bank
    } = body;


    const amountToSave = await prismadb.amountToSave.create({
      data: {
        amount,
        currency,
        bank,
        userId,
      },
    });


    return NextResponse.json(amountToSave);
  } catch (error) {
    console.log("[amountToSave_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

