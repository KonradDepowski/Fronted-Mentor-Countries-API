import CountryPage from "@/components/UI/CountryPage";
import React from "react";

const Country = ({
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  return <CountryPage params={params} />;
};

export default Country;
