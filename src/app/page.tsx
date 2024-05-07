import { Suspense } from "react";
import Loading from "./loading";
import FilterSection from "@/components/UI/FilterSection";
import { CountriesList } from "@/components/UI/CountriesList";

export default async function Home({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <main>
      <FilterSection />
      <Suspense fallback={<Loading />}>
        <CountriesList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
