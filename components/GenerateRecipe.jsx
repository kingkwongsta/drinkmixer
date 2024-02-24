"use client";
import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import { useState } from "react";
import { createCompletion, createImage } from "@/app/actions";
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
      const imageResponse = await createImage();
      const imageURL = `data:image/jpeg;base64,${imageResponse[0].imageData}`;

      if (response) {
        setDrinkRecipe(response);
        setDrinkImage(imageURL);
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
