export type CountryListItemType = {
  countryCode: string;
  name: string;
};

export type CountryListProps = { countries: CountryListItemType[] };
