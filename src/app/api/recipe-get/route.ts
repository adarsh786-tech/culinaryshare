import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const recipeList = await prismadb.recipe.findMany();
    if (!recipeList) {
      throw NextResponse.json(
        { message: "Error fetching recipes!!" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        data: recipeList,
        message: "Recipe list fetch successful",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    throw NextResponse.json(
      {
        message: "Error fetching recipe list....",
        error: error,
        success: false,
      },
      { status: 401 }
    );
  }
}
