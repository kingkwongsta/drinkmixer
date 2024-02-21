/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/oVjDprhsT4r
 */
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import userStore from "@/lib/userStore";

export default function RecipeCard() {
  const { drinkImage, drinkRecipe } = userStore();
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>{drinkRecipe.name}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="items-center gap-4">
          <h3 className="text-sm font-semibold mb-1">Preparation</h3>
          <ul className="pl-2 text-sm">
            {drinkRecipe.ingredients
              .filter((item) => item.name !== "Ice cubes")
              .map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity} {ingredient.name.toLowerCase()}
                </li>
              ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-sm font-semibold mb-1">Preparation</h3>
          <ol className="list-decimal pl-6 text-sm">
            {drinkRecipe.instructions.split(".").map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm">Enjoy responsibly. Drink responsibly.</p>
      </CardFooter>
    </Card>
  );
}
