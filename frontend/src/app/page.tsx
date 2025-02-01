"use client";

import CountryList from "@/components/CountryList";
import { useState } from "react";

const countries = [
  {
    countryCode: "BR",
    name: "Brazil",
  },
  {
    countryCode: "UA",
    name: "Ukraine",
  },
];

export default function Home() {
  const [countriesList, setCountriesList] = useState();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center gap-5 px-8 w-full">
        <h1 className="text-3xl font-bold">Countries Info</h1>
        <form onSubmit={handleSearch} className="w-fit mx-auto">
          <input
            type="search"
            name="search"
            className="w-64 rounded-xl outline-none bg-zinc-900 border-[1.5px] p-2"
          />
        </form>
        <CountryList countries={countries} />
      </div>
    </main>
  );
}
