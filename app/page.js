"use client";
import Image from "next/image";
import Title from "@/components/component/Title";
import Dropdown from "@/components/component/Dropdown";
import GenerateRecipe from "@/components/component/GenerateRecipe";
import RecipeCard from "@/components/component/RecipeCard";
import { RecipeCard2 } from "@/components/component/RecipeCard2";
import userStore from "@/lib/userStore";
import { ThemeToggle } from "@/components/component/ThemeToggle";

export default function Home() {
  // create a new user store

  const { drinkRecipe } = userStore();
  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[50px]">
      <ThemeToggle />
      <Title />
      <Dropdown />
      <div className="flex justify-center">
        <GenerateRecipe />
      </div>
      <div></div>
      <div className="flex justify-center">
        {drinkRecipe && <RecipeCard2 />}
      </div>
    </main>
  );
}
