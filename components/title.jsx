"use client";
import userStore from "@/lib/userStore";

export default function Title() {
  const { setDrinkRecipe } = userStore();

  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <div className="grid gap-8">
        <h1
          onClick={() => setDrinkRecipe("")}
          className="text-3xl font-bold tracking-tight"
        >
          Drink Mixer
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Discover a world of exquisite cocktails by sharing your preferences
        </p>
      </div>
    </div>
  );
}
