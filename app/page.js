import Image from "next/image";
import Title from "@/components/component/title";
import Dropdown from "@/components/component/dropdown";

export default function Home() {
  return (
    <main className="w-full py-12 md:py-24">
      <Title />
      <Dropdown />
    </main>
  );
}
