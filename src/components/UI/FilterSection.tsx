import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const FilterSection = () => {
  return (
    <header className="flex flex-col justify-between p-3 md:flex-row md:items-center md:justify-between md:px-0 xl:py-4  max-w-[1600px] m-auto">
      <Search />
      <Filter />
    </header>
  );
};

export default FilterSection;
