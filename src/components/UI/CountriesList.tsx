import { getCountries } from "@/actions/countries";
import CountryItem from "./CountryItem";

export const CountriesList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  let filterMode = searchParams?.filter || "";
  let searchMode = searchParams?.search || "";

  let content: JSX.Element = (
    <p className="text-center mt-5 lg:text-xl">Not found countries</p>
  );

  const countries = await getCountries(filterMode, searchMode);

  if (countries) {
    content = (
      <ul className="flex flex-col items-center p-2 gap-5 w-full md:py-2 md:px-0 md:flex-row md:flex-wrap md:justify-center md:gap-10 max-w-[1600px] m-auto ">
        {countries.map((country: any, index: number) => (
          <CountryItem index={index} country={country} key={country.id} />
        ))}
      </ul>
    );
  }

  return content;
};
