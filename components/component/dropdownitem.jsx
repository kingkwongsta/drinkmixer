"use client";

import { useState } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropdownItem({
  buttonName,
  dropDownValues,
  preference,
  setPreference,
}) {
  const [buttonLabel, setButtonLabel] = useState(buttonName);
  const handlePreferenceChange = (newValue) => {
    setPreference(newValue);
    setButtonLabel(newValue);
  };

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button className="w-[150px]" variant="outline">
          {buttonLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuRadioGroup
          value={preference}
          onValueChange={handlePreferenceChange}
        >
          {dropDownValues.map((item, index) => {
            return (
              <DropdownMenuRadioItem value={item} key={index}>
                {item}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
