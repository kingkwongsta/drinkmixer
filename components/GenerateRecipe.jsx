"use client";
import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import { useState } from "react";
import { createCompletion } from "@/app/actions";
import LoadingIcon from "./LoadingIcon";

export default function GenerateRecipe() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    drinkRecipe,
    setDrinkRecipe,
    userFlavor,
    userLiquor,
    userMood,
    setDrinkImage,
  } = userStore();
  async function getRecipe() {
    setIsLoading(true);
    try {
      const response = await createCompletion(userFlavor, userLiquor, userMood);
      if (response) {
        const { recipe } = response;
        const { imageResponse } = response;
        setDrinkRecipe(recipe);
        setDrinkImage(imageResponse);
      } else {
        console.log("recipe unavailable");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <form action={getRecipe}>
        <Button
          type="submit"
          className={` ${isLoading ? "hidden" : ""}`}
          onClick={() => setIsLoading(true)}
        >
          Generate Recipe
        </Button>
      </form>
      {isLoading && <LoadingIcon />}
      {/* <button
        onClick={() => {
          console.log(drinkRecipe);
        }}
        className="border-2 border-cyan-500"
      >
        Get Recipe
      </button> */}
    </>
  );
}
