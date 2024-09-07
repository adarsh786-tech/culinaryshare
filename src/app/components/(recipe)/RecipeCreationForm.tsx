"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RecipeFormImage from "@/assets/recipe_form_mockup.png";
import RecipeFormDesign from "@/app/components/(recipe)/RecipeFormDesign";

const RecipeCreationForm = () => {
  const router = useRouter();
  return (
    <div className="relative w-full bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl mb-2">
            Describe Recipe
          </h1>
          <RecipeFormDesign />
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 m-5">
          <Image
            className="object-cover border-4 border-white rounded-3xl shadow-md shadow-purple-500"
            src={RecipeFormImage}
            width={800}
            height={600}
            alt="Image by pch.vector on Freepik"
            onClick={() =>
              router.push(
                "https://www.freepik.com/free-vector/tiny-female-chef-cooking-vegan-meal-using-recipe-kitchen-cook-making-dish-from-restaurant-menu-flat-vector-illustration-healthy-food-diet-culinary-nutrition-concept-website-design_22344050.htm#fromView=search&page=1&position=5&uuid=fe56427d-157f-4904-b829-709d6ba8576b"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCreationForm;
