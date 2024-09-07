import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = await prismadb.user.findFirst({
      where: {
        email: session.user?.email,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const {
      recipeName,
      recipeDescription,
      recipeIngredients,
      recipeSteps,
      recipeCookingTime,
      recipeServingSize,
    } = await req.json();

    const recipeBody = await prismadb.recipe.create({
      data: {
        authorID: user?.id,
        recipeName: recipeName,
        recipeDescription: recipeDescription,
        recipeIngredients: recipeIngredients,
        recipeSteps: recipeSteps,
        recipeCookingTime: recipeCookingTime,
        recipeServingSize: recipeServingSize,
        // image: "",
        // tags: "",
        avgRating: 3.5,
      },
    });
    console.log(`New Recipe Uploaded: ${recipeBody}`);
    return NextResponse.json(
      { message: "Recipe updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error updating recipe. Error: ${error}`);

    return NextResponse.json(
      { message: "Error updating recipe" },
      { status: 401 }
    );
  }
}
