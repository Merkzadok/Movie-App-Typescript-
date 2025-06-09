import { Film } from "lucide-react";
import Link from "next/link";
import { GenreDropDownMenu } from "./DropDownMenu";
// import { DarkModeToggle } from "./DarkModeToggle";
// import { HeaderSearch } from "./SSearch";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pl-4 pr-4 max-w-[1280px] w-full mx-auto md:h-15 md:text-xl ">
      <Link href={"/"}>
        <div className="flex items-center ">
          <Film className="text-blue-400 h-4.5" />
          <p className="text-blue-400">Movie Z</p>
        </div>
      </Link>

      <div className="flex gap-4 items-center">
        <div className="hidden sm:block">
          <GenreDropDownMenu />
        </div>
        <div className="flex items-center  ">{/* <HeaderSearch /> */}</div>
      </div>
      <div className="flex gap-3  ">
        {" "}
        {/* <Search className="h-3.5 md:h-5 " /> */}
        {/* <button className="cursor-pointer border-[1px] border-[#E4E4E7] rounded-[5px] ">
          {" "}
          <Moon className="h-3.5 md:h-5  " />{" "}
        </button> */}
        {/* <DarkModeToggle /> */}
      </div>
    </div>
  );
};
