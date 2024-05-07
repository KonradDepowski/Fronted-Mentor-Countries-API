"use client";
import { CountryItemProps } from "@/actions/countries";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CountryItem = ({
  index,
  country,
}: {
  index: number;
  country: CountryItemProps;
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      key={country.id}
      className="flex flex-col w-[70%] bg-secondary rounded-lg shadow-lg max-w-72  cursor-pointer hover:scale-105"
    >
      <Link className="md:min-h-[340px]" href={`/${country.name}`}>
        <div>
          <Image
            height={160}
            width={288}
            className="rounded-t-md shadow-sm h-40 object-cover "
            src={country.imageUrl}
            alt="country"
          />
        </div>
        <h2 className="text-xl p-3 font-bold"> {country.name}</h2>
        <div className="px-2">
          <p className="text-sm font-bold p-1">
            Population:{" "}
            <span className="font-normal ">{country.population}</span>
          </p>
          <p className="text-md font-bold p-1">
            Region: <span className="font-normal ">{country.region}</span>
          </p>
          <p className="text-md font-bold p-1">
            Capital: <span className="font-normal ">{country.capital}</span>
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

export default CountryItem;
