import { GenresDemo } from "@/app/genre/components/Genres";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export const GenreDropDownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-3 ">
          {" "}
          <ChevronDown /> Genres
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="font-extrabold text-3xl ">
            Genres
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          See list of movies by genre
          <DropdownMenuItem className="flex flex-wrap max-w-300 w-full">
            {" "}
            <GenresDemo />{" "}
          </DropdownMenuItem>
          <DropdownMenuItem> See list of movies by genre</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
