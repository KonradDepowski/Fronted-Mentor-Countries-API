export function tranformDataFromObjToStr<T>(obj: Record<string, T>) {
  let arr = [];
  let str = "";
  for (const key in obj) {
    arr.push(obj[key]);
  }

  arr.forEach((el) => {
    str += `${el} `;
  });

  return str;
}

export const transformPopulation = (population: any) =>
  population.toLocaleString("en-US");
