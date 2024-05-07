"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/shadcn/select";

import { useRouter } from "next/navigation";

const Filter = () => {
  const router = useRouter();

  const changeValueHandler = (value: string) => {
    if (value === "all") {
      router.push(`/?filter=`);
    } else {
      router.push(`/?filter=${value}`);
    }
  };
  return (
    <Select onValueChange={changeValueHandler}>
      <SelectTrigger className="w-[12rem] my-3 mx-1 bg-secondary shadow-md p-6 md:rounded-xl">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="bg-secondary">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="america">America</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filter;
