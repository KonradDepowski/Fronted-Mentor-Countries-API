"use client";
import { useRouter } from "next/navigation";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const router = useRouter();

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let url = `/?search=${event.target.value}`;
    router.push(url);
  };

  return (
    <>
      <label className="flex items-center mx-1 shadow-lg   max-w-[35rem] bg-secondary rounded-md md:w-1/2 md:p-2 md:px-3 md:rounded-xl focus:shadow-xl hover:shadow-2xl   ">
        <AiOutlineSearch />
        <input
          onChange={changeInputValue}
          className="p-2 rounded-md border-none w-full outline-none bg-secondary "
          type="search"
          placeholder="Search for a country..."
        />
      </label>
    </>
  );
};

export default Search;
