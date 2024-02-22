"use client";
import { Button } from "@/components/ui/button";
import userStore from "@/lib/userStore";
import { createCompletion } from "@/app/actions";

export default function GenerateRecipe({ setLoading }) {
  const { drinkRecipe, setDrinkRecipe, userFlavor, userLiquor, userMood } =
    userStore();
  async function getRecipe() {
    // setIsLoading(true);
    try {
      const response = await createCompletion(userFlavor, userLiquor, userMood);
      if (response) {
        setDrinkRecipe(response);
      } else {
        console.log("recipe unavailable");
      }
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false);
    }
  }
  return (
    <>
      <form action={getRecipe}>
        <Button type="submit" className="" onClick={() => setLoading(true)}>
          Generate Recipe
        </Button>
      </form>
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
