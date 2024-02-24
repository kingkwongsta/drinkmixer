"use client";
import userStore from "@/lib/userStore";

export default function Title() {
  const { setDrinkRecipe } = userStore();

  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <div className="grid gap-8">
        <h1
          onClick={() => setDrinkRecipe("")}
          className="text-3xl font-bold tracking-tight"
        >
          Cocktail Recipe Generator
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let&#39;s mix up something special! Select your preferences and
          we&#39;ll give you a unique cocktail recipe.
        </p>
      </div>
    </div>
  );
}
