import Image from "next/image";
import BackButton from "./BackButton";
import { getSingleCountry } from "@/actions/countries";
import Link from "next/link";

const CountryPage = async ({ params }: { params: { id: string } }) => {
  const country = await getSingleCountry(params.id);

  return (
    <section className=" p-2 bg-secondary min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-128px)]">
      <div className=" max-w-[1600px] m-auto ">
        <BackButton />
        <div className="md:flex md:flex-row md:flex-wrap">
          <div className="w-full my-7 mx-auto max-w-[60rem] md:w-1/2 ">
            <Image
              height={100}
              width={100}
              src={country?.imageUrl}
              alt={country?.name}
              className="w-full md:w-[90%] h-full max-w-[35rem] xl:max-w-[45rem]"
            />
          </div>
          <div className="md:w-1/2 flex flex-row flex-wrap items-center ">
            <div className="mt-4">
              <h2 className="text-2xl mb-2 font-bold xl:text-3xl xl:mb-8">
                {country?.name}
              </h2>
              <p className="text-sm p-1 font-bold md:text-lg">
                Native Name:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.nativeName}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Population:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.population}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Region:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.region}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Sub Region:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.subregion}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Capital:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.capital}
                </span>{" "}
              </p>
            </div>
            <div className="mt-4 xl:ml-4">
              <p className="text-sm p-1 font-bold xl:text-lg">
                Top Level Domain:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.domain}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Currencies:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.currencies}
                </span>{" "}
              </p>
              <p className="text-sm p-1 font-bold xl:text-lg">
                Languages:{" "}
                <span className="font-normal text-[var(--font)]">
                  {country?.languages}
                </span>{" "}
              </p>
            </div>
            <div className="py-3 px-1 w-full text-md">
              <h3 className="font-bold text-lg mb-2">Border Countries</h3>
              <ul className="flex flex-row flex-wrap gap-2">
                {country?.borders?.map((el) => (
                  <li
                    className="py-1 px-2 bg-card text-md  shadow-lg "
                    key={el}
                  >
                    <Link href={`/${el}`}>{el}</Link>
                  </li>
                ))}
                {!country.borders && (
                  <p className="text-[var(--font)]">
                    Country does not have any borders
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPage;
