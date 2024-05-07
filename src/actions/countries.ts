import {
  tranformDataFromObjToStr,
  transformPopulation,
} from "@/utils/transformData";

export type CountryItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountrySingleProps = {
  id: string;
  name: string;
  imageUrl: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  domain: string;
  currencies: string;
  languages: string;
  borders: [];
};

export async function getCountries(filter?: string, search?: string) {
  let url = "https://restcountries.com/v3.1/all";

  if (search === "") {
    url = "https://restcountries.com/v3.1/all";
  }

  if (filter !== "") {
    url = `https://restcountries.com/v3.1/region/${filter}`;
  }

  if (search !== undefined && search !== "") {
    url = `https://restcountries.com/v3.1/name/${search}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const responseData = await response.json();

  const allCountries = [];

  if (responseData === undefined || null) return;

  const population = transformPopulation(responseData[0].population);

  for (const key in responseData) {
    const country: CountryItemProps = {
      id: responseData[key].name.official,
      imageUrl: responseData[key].flags.svg,
      name: responseData[key].name.common,
      population: population,
      region: responseData[key].region,
      capital: responseData[key].capital,
    };
    allCountries.push(country);
  }

  return allCountries;
}

const transformBorders = async (bordersCode: Array<string>) => {
  if (!bordersCode) return null;
  if (bordersCode.length < 1) return null;

  const bordersQuery = bordersCode.join(",");
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${bordersQuery}&fields=name`
  );
  const data = await res.json();
  const borders = data.map((country: any) => country.name.common).sort();

  return borders;
};

export async function getSingleCountry(name: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!response.ok) {
    console.log("error");
  }

  const responseData = await response.json();

  let currencies = "";
  let data = responseData[0].currencies;
  for (const key in data) {
    currencies += `${data[key].name} `;
  }

  let nativeName = "";

  for (const key in responseData[0].name.nativeName) {
    nativeName += `${responseData[0].name.nativeName[key].common} `;
  }

  const languages = tranformDataFromObjToStr(responseData[0].languages);

  const population = transformPopulation(responseData[0].population);

  const borders = await transformBorders(responseData[0].borders);

  const countryObj: CountrySingleProps = {
    id: responseData[0].name.common,
    name: responseData[0].name.common,
    imageUrl: responseData[0].flags.svg,
    nativeName: nativeName,
    population: population,
    region: responseData[0].region,
    subregion: responseData[0].subregion,
    capital: responseData[0].capital[0],
    domain: responseData[0].tld[0],
    currencies: currencies,
    languages: languages,
    borders: borders,
  };

  return countryObj;
}
