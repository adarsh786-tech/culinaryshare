"use client";

import { useState, useEffect } from "react";
import RecipeCardDesign from "@/app/components/(recipe)/RecipeCardDesign";
import ExplorePageHeroDesign from "@/app/components/(recipe)/ExplorePageHeroDesign";
import LandingNavBar from "@/app/components/(landingpage)/LandingNavBar";

interface RecipeTypeProps {
  id: string;
  recipeName: string;
  recipeDescription: string;
  recipeIngredients: string;
  recipeSteps: string;
  recipeCookingTime: string;
  recipeServingSize: string;
  name: string;
  avgRating: number;
}

const ExploreRecipes = () => {
  const [recipeList, setRecipeList] = useState<RecipeTypeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/recipe-get");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch recipes");
        }

        setRecipeList(data.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 text-white font-bold  text-center space-y-5">
      <LandingNavBar />
      <ExplorePageHeroDesign />
      {isLoading ? (
        <div className="flex items-center justify-center">
          Fetching recipes... <span />
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : error ? (
        <p>Error fetching recipes: {error}</p>
      ) : (
        recipeList.map((recipe, index) => (
          <RecipeCardDesign
            key={index}
            recipeName={recipe.recipeName}
            recipeDescription={recipe.recipeDescription}
            recipeIngredients={recipe.recipeIngredients}
            recipeSteps={recipe.recipeSteps}
            recipeCookingTime={recipe.recipeCookingTime}
            recipeServingSize={recipe.recipeServingSize}
            name="Mihir Adarsh"
            avgRating={3.5}
          />
        ))
      )}
    </div>
  );
};

export default ExploreRecipes;
