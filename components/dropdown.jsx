/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7bs2BdoeQ5Q
 */

"use client";
import { useState } from "react";
import DropdownItem from "./dropdownitem";
import userStore from "@/lib/userStore";

export default function Dropdown() {
  const [position, setPosition] = useState("sour");
  const {
    userFlavor,
    setUserFlavor,
    userLiquor,
    setUserLiquor,
    userMood,
    setUserMood,
  } = userStore();
  const flavorOptions = ["Sweet", "Sour", "Bitter", "Spicy", "Fruity"];
  const liquorOptions = [
    "Vodka",
    "Soju",
    "Whiskey",
    "Rum",
    "Gin",
    "Tequila",
    "Brandy",
  ];
  const moodOptions = [
    "Celebratory",
    "Nostalgic",
    "Comforting",
    "Adventurous",
    "Reflective",
    "Flirty",
    "Creative",
  ];

  return (
    <div className="container px-4 md:px-6 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-10 justify-center">
          <DropdownItem
            buttonName={"Flavor Profile"}
            dropDownValues={flavorOptions}
            preference={userFlavor}
            setPreference={setUserFlavor}
          />
          <DropdownItem
            buttonName={"Liquor Choice"}
            dropDownValues={liquorOptions}
            preference={userLiquor}
            setPreference={setUserLiquor}
          />
          <DropdownItem
            buttonName={"Mood"}
            dropDownValues={moodOptions}
            preference={userMood}
            setPreference={setUserMood}
          />
        </div>
      </div>
    </div>
  );
}
