"use client";

import CountryList from "@/components/CountryList";
import { ChangeEvent, useState, useEffect } from "react";
import api from "@/utils/api";
import { CountryListItemType } from "@/types/Types";

export default function Home() {
  const [countriesList, setCountriesList] = useState<CountryListItemType[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await api.get("/api/countries");
        setCountriesList(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchedCountry = e.target.value.toLowerCase();
    const filteredContries = countriesList.filter((country) =>
      country.name.toLowerCase().includes(searchedCountry)
    );
    setCountriesList(filteredContries);
    e.preventDefault();
  };
  return (
    <main className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center gap-5 px-8 w-full">
        <h1 className="text-3xl font-bold">Countries Info</h1>
        <input
          type="search"
          name="search"
          onChange={handleSearch}
          className="w-64 rounded-xl outline-none bg-zinc-900 border-[1.5px] p-2"
        />
        <CountryList countries={countriesList} />
      </div>
    </main>
  );
}
