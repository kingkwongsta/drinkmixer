"use client";
import Image from "next/image";
import Title from "@/components/component/Title";
import Dropdown from "@/components/component/Dropdown";
import GenerateRecipe from "@/components/component/GenerateRecipe";
import RecipeCard from "@/components/component/RecipeCard";
import userStore from "@/lib/userStore";

export default function Home() {
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
