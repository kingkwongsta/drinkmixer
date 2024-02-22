"use client";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { drinkRecipe } = userStore();

  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[50px]">
      <Title />
      <Dropdown />
      <div className="flex flex-col items-center">
        {!drinkRecipe && <GenerateRecipe />}
        {drinkRecipe && <RecipeCard />}
      </div>
    </main>
  );
}
