import Image from "next/image";
import userStore from "@/lib/userStore";

export default function RecipeCard() {
  const { drinkImage, drinkRecipe } = userStore();
  return (
    <div>
      <h2 className="mb-3 mt-10 text-center text-3xl font-semibold ">
        {drinkRecipe.name}
      </h2>

      <div className="flex flex-row space-x-10 max-sm:flex-col max-sm:space-y-5">
        <div className="flex max-w-[600px] flex-col space-y-8">
          <div className="basis-1/2 rounded-xl bg-[#a7a7a7] p-10 shadow-xl">
            <h2 className="mb-5 text-xl font-semibold text-[#dd6236]">
              Ingredients
            </h2>
            <ul>
              {drinkRecipe.ingredients
                .filter((item) => item.name !== "Ice cubes")
                .map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.quantity} {ingredient.name.toLowerCase()}
                  </li>
                ))}
            </ul>
          </div>
          <div className="basis-1/2 rounded-xl bg-[#a7a7a7] p-10 shadow-xl">
            <h2 className="mb-5 text-xl font-semibold text-[#dd6236]">
              Instructions
            </h2>
            <ol>
              {drinkRecipe.instructions
                .split("\n")
                .map((instruction, index) => (
                  <li key={index}>{instruction.trim()}</li>
                ))}
            </ol>
          </div>
        </div>
        <div className="h-full rounded-xl shadow-xl">
          {drinkImage ? (
            <Image
              className="rounded-xl object-cover opacity-70"
              // src={drinkImage.imageURL}
              src={"/images/liquor-1.jpg"}
              alt="drink"
              width={400}
              height={800}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
