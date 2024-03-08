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

      if (response) {
        const imageResponse = await createImage(response, userLiquor);
        const imageURL = `data:image/jpeg;base64,${imageResponse[0].imageData}`;

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
  const fetchData = async () => {
    const queryString = new URLSearchParams({
      liquor: userLiquor,
      flavor: userFlavor,
      mood: userMood,
    });
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://langchain-backend-kappa.vercel.app/cocktail?${queryString}`
        : `/cocktail?${queryString}`;

    const url = `${baseUrl}?${queryString}`;
    // const url = `/cocktail?${queryString}`;
    // const url = `http://127.0.0.1:8000/cocktail?${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    setDrinkRecipe(data);
    setIsLoading(false);
  };
  return (
    <>
      <form action={fetchData}>
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
