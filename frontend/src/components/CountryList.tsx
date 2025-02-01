import { CountryListProps } from "@/types/Types";
import Link from "next/link";

export default function CountryList({ countries }: CountryListProps) {
  const getFlagEmoji = (countryCode: string) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );

  return (
    <div className="flex flex-col gap-5 border-2 border-zinc-300 text-center px-5 py-2 rounded-md">
      <ul>
        {countries.map((country) => (
          <Link
            key={country.countryCode}
            href={`/country/${country.countryCode}`}
          >
            <li className=" font-bold text-2xl py-1 px-5">
              {`${country.name} ${getFlagEmoji(country.countryCode)}`}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
