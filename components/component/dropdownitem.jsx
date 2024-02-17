import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropDownItem({ buttonName, dropDownValues }) {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button className="w-[150px]" variant="outline">
          {buttonName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {dropDownValues.map((flavor, index) => {
            return (
              <DropdownMenuRadioItem value={flavor} key={index}>
                {flavor.toUpperCase}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
