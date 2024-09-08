"use client";

import Image from "next/image";
import SampleFood from "@/assets/sample_food.jpg";
import { Cabin, Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import { Rating } from "@mui/material";

const font = Cabin({
  weight: "600",
  subsets: ["latin"],
});
const titleFont = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});

const RecipeCardDesign = ({
  recipeName,
  recipeDescription,
  recipeIngredients,
  recipeSteps,
  recipeCookingTime,
  recipeServingSize,
  name,
  avgRating,
}: {
  recipeName: string;
  recipeDescription: string;
  recipeIngredients: string;
  recipeSteps: string;
  recipeCookingTime: string;
  recipeServingSize: string;
  name: string;
  avgRating: number;
}) => {
  return (
    <div className="px-10 pb-20 bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600">
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="mx-auto w-[450px]  rounded-md border-2 border-purple-500 drop-shadow-2xl">
          <Image
            src={SampleFood}
            alt="Food image"
            width={440}
            height={200}
            className="object-cover p-2 rounded-3xl "
          />

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div>
                <span
                  className={cn(
                    "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                    titleFont.className
                  )}
                >
                  Recipe name
                </span>

                <div className="label p-2 mt-1">
                  <span
                    className={cn(
                      "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-2xl p-1 bg-slate-300",
                      font.className
                    )}
                  >
                    {recipeName}
                  </span>
                </div>
              </div>
              <div>
                <span
                  className={cn(
                    "label-alt-text ml-3 -mb-2 mr-3 text-slate-300 font-bold underline",
                    titleFont.className
                  )}
                >
                  Recipe author
                </span>

                <div className="label p-2 mt-1">
                  <span
                    className={cn(
                      "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-2xl p-1 bg-slate-300",
                      font.className
                    )}
                  >
                    {name}
                  </span>
                </div>
              </div>
            </div>

            <span
              className={cn(
                "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                titleFont.className
              )}
            >
              Recipe description
            </span>
            <div className="label p-2 mt-1">
              <span
                className={cn(
                  "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-3xl p-1 bg-slate-300",
                  font.className
                )}
              >
                {recipeDescription}
              </span>
            </div>
            <span
              className={cn(
                "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                titleFont.className
              )}
            >
              Recipe ingredients
            </span>
            <div className="label p-2 mt-1">
              <span
                className={cn(
                  "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-3xl p-1 bg-slate-300",
                  font.className
                )}
              >
                {recipeIngredients}
              </span>
            </div>
            <span
              className={cn(
                "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                titleFont.className
              )}
            >
              Recipe steps
            </span>
            <div className="label p-2 mt-1 ">
              <span
                className={cn(
                  "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-3xl p-1 bg-slate-300",
                  font.className
                )}
              >
                {recipeSteps}
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <span
                  className={cn(
                    "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                    titleFont.className
                  )}
                >
                  Cooking time
                </span>
                <div className="label p-2 mt-1">
                  <span
                    className={cn(
                      "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-2xl p-1 bg-slate-300",
                      font.className
                    )}
                  >
                    {recipeCookingTime}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span
                  className={cn(
                    "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                    titleFont.className
                  )}
                >
                  Serving size
                </span>
                <div className="label p-2 mt-1">
                  <span
                    className={cn(
                      "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-2xl p-1 bg-slate-300",
                      font.className
                    )}
                  >
                    Servings: {recipeServingSize}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "label-alt-text ml-3 -mb-2 text-slate-300 font-bold underline",
                    titleFont.className
                  )}
                >
                  Average rating
                </span>
                <div className="label p-2 flex items-center justify-center mt-1">
                  <div
                    className={cn(
                      "label-text text-slate-950 text-lg font-bold border-2 border-white rounded-2xl p-1",
                      font.className
                    )}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={avgRating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardDesign;
