import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function DropDownItem({ buttonName }) {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <Button className="w-[150px]" variant="outline">
          {buttonName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="sweet">Sweet</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sour">Sour</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bitter">Bitter</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fruity">Fruity</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
