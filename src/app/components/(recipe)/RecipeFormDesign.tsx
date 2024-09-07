import { useState } from "react";
import axios from "axios";

import { cn } from "@/lib/utils";

import { Roboto } from "next/font/google";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import toast from "react-hot-toast";
const font = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const RecipeFormDesign = () => {
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    recipeDescription: "",
    recipeIngredients: "",
    recipeSteps: "",
    recipeCookingTime: "",
    recipeServingSize: "",
  });

  const resetRecipe = () => {
    setRecipeData({
      recipeName: "",
      recipeDescription: "",
      recipeIngredients: "",
      recipeSteps: "",
      recipeCookingTime: "",
      recipeServingSize: "",
    });
  };

  const handleRecipeUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/recipe-update", recipeData);
      toast.success(`Recipe Upload Successful`);
      console.log(`Response after updating recipe: ${response.data}`);
      setRecipeData({
        recipeName: "",
        recipeDescription: "",
        recipeIngredients: "",
        recipeSteps: "",
        recipeCookingTime: "",
        recipeServingSize: "",
      });
    } catch (error) {
      console.log(`Error updating recipe: ${error}`);
      toast.error(`Error updating recipe!!`);
    }
  };

  return (
    <div className="from-indigo-500 via-purple-500 to-pink-500 border border-red p-8 w-100 rounded-lg shadow-md shadow-purple-500">
      <div className="flex flex-row gap-2 items-center justify-between"></div>
      <form>
        <div className="label">
          <label
            htmlFor="recipeName"
            className={cn("label-text text-xl text-white", font.className)}
          >
            Recipe Title
          </label>
        </div>
        <input
          className="flex items-center justify-start input input-bordered placeholder:text-black placeholder:text-sm text-black bg-slate-400 w-full max-w-xs"
          id="recipeName"
          name="recipeName"
          required
          type="text"
          placeholder="Eg. Spaghetti Carbonara "
          value={recipeData.recipeName}
          onChange={(e) =>
            setRecipeData({ ...recipeData, recipeName: e.target.value })
          }
        />
        <div className="label">
          <label
            htmlFor="recipeDescription"
            className={cn("label-text text-xl text-white", font.className)}
          >
            Recipe Description
          </label>
        </div>
        <textarea
          className="w-full px-4 py-2 border rounded-lg resize-none h-28 focus:outline-none focus:ring focus:border-blue-300 placeholder:text-black placeholder:text-sm text-black bg-slate-400"
          id="recipeDescription"
          name="recipeDescription"
          required
          placeholder="Eg. A classic Italian dish made with eggs, cheese, pancetta, and pepper. It's quick and easy to make for a delicious weeknight dinner"
          value={recipeData.recipeDescription}
          onChange={(e) =>
            setRecipeData({ ...recipeData, recipeDescription: e.target.value })
          }
        />

        <div className="label">
          <label
            htmlFor="recipeIngredients"
            className={cn("label-text text-xl text-white", font.className)}
          >
            Ingredients
          </label>
        </div>
        <textarea
          className="w-full px-4 py-2 border rounded-lg resize-none h-28 focus:outline-none focus:ring focus:border-blue-300 placeholder:text-black placeholder:text-sm text-black bg-slate-400"
          id="recipeIngredients"
          name="recipeIngredients"
          required
          placeholder="List each ingredient with quantities. Each field should allow the user to add quantity, unit (e.g., cups, tablespoons), and ingredient name. Example: 200g Spaghetti, 100g Pancetta, 2 large eggs, 50g Parmesan cheese, grated"
          value={recipeData.recipeIngredients}
          onChange={(e) =>
            setRecipeData({ ...recipeData, recipeIngredients: e.target.value })
          }
        />

        <div className="label">
          <label
            htmlFor="recipeSteps"
            className={cn("label-text text-xl text-white", font.className)}
          >
            Steps
          </label>
        </div>
        <textarea
          className="w-full px-4 py-2 border rounded-lg resize-none h-20 focus:outline-none focus:ring focus:border-blue-300 placeholder:text-black placeholder:text-sm text-black bg-slate-400"
          id="recipeSteps"
          name="recipeSteps"
          required
          placeholder="Detailed step-by-step instructions for preparing the dish."
          value={recipeData.recipeSteps}
          onChange={(e) =>
            setRecipeData({ ...recipeData, recipeSteps: e.target.value })
          }
        />

        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="label">
            <label
              htmlFor="recipeCookingTime"
              className={cn("label-text text-xl text-white", font.className)}
            >
              Cooking Time
            </label>
          </div>
          <input
            className="flex items-center justify-start input input-bordered placeholder:text-black placeholder:text-sm text-black bg-slate-400 w-28"
            id="recipeCookingTime"
            name="recipeCookingTime"
            required
            type="text"
            placeholder="Eg. 30 mins"
            value={recipeData.recipeCookingTime}
            onChange={(e) =>
              setRecipeData({
                ...recipeData,
                recipeCookingTime: e.target.value,
              })
            }
          />
          <div className="label">
            <label
              htmlFor="recipeServingSize"
              className={cn("label-text text-xl text-white", font.className)}
            >
              Servings
            </label>
          </div>
          <input
            className="flex items-center justify-start input input-bordered placeholder:text-black placeholder:text-sm text-black bg-slate-400 w-20 max-w-xs"
            id="recipeServingSize"
            name="recipeServingSize"
            required
            type="text"
            placeholder="Eg. 4"
            value={recipeData.recipeServingSize}
            onChange={(e) =>
              setRecipeData({
                ...recipeData,
                recipeServingSize: e.target.value,
              })
            }
          />
        </div>
        <div className="flex items-center justify-center mt-5 gap-2">
          <button className="btn btn-success" onClick={handleRecipeUpdate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Save Recipe
          </button>
          <button className="btn btn-error" onClick={resetRecipe}>
            <RestartAltIcon />
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeFormDesign;
