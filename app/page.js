import Image from "next/image";
import Title from "@/components/component/Title";
import Dropdown from "@/components/component/Dropdown";
import GenerateRecipe from "@/components/component/GenerateRecipe";

export default function Home() {
  return (
    <main className="w-full px-12 py-12 md:py-24 space-y-[70px]">
      <Title />
      <Dropdown />
      <div className="flex justify-center">
        <GenerateRecipe />
      </div>
    </main>
  );
}
