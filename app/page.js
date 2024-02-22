"use client";
import Image from "next/image";
import Title from "@/components/title";
import Dropdown from "@/components/dropdown";
import GenerateRecipe from "@/components/GenerateRecipe";
import RecipeCard from "@/components/RecipeCard";
import userStore from "@/lib/userStore";
import LoadingIcon from "@/components/LoadingIcon";
import { useState } from "react";

export default function Home() {
  const { loading, setLoading } = useState(false);

  const { drinkRecipe } = userStore();
  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[50px]">
      <Title />
      <Dropdown />
      <div className="flex flex-col items-center">
        {/* if the generate Recipe button is clicked, the loading component will be displayed */}
        {loading ? <LoadingIcon /> : <GenerateRecipe setLoading={setLoading} />}
      </div>
      <div className="flex justify-center">{drinkRecipe && <RecipeCard />}</div>
    </main>
  );
}
