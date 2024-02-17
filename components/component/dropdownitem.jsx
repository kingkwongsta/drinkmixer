import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropDownItem({
  buttonName,
  dropDownValues,
  preference,
  setPreference,
}) {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button className="w-[150px]" variant="outline">
          {buttonName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuRadioGroup
          value={preference}
          onValueChange={setPreference}
        >
          {dropDownValues.map((flavor, index) => {
            return (
              <DropdownMenuRadioItem value={flavor} key={index}>
                {flavor}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
