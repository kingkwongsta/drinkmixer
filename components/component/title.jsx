export default function Title() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <div className="grid gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Cocktail Recipe Generator
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's mix up something special! Select your preferences and we'll give
          you a unique cocktail recipe.
        </p>
      </div>
    </div>
  );
}
