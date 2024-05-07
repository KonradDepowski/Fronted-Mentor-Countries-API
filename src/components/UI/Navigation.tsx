import { BsMoon } from "react-icons/bs";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="p-4 h-[4rem] md:p-7 xl:p-10 xl:px-14 w-full bg-secondary  md:h-[8rem]">
      <div className=" flex justify-between items-center max-w-[1600px] m-auto">
        <h2 className="text-lg xl:text-xl font-bold">
          <Link href="/">Where in the world? </Link>
        </h2>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
