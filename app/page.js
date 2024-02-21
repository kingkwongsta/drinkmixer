"use client";
import Image from "next/image";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";

export default function Home() {
  // create a new user store

  const { drinkRecipe } = userStore();
  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[50px]">
      <Title />
      <Dropdown />
      <div className="flex justify-center">
        <GenerateRecipe />
      </div>
      <div className="flex justify-center">{drinkRecipe && <RecipeCard />}</div>
    </main>
  );
}
