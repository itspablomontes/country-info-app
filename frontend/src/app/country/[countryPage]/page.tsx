export default function CountryCode({
  params,
}: {
  params: { countryCode: string };
}) {
  return <div>Country Page: {params.countryCode}</div>;
}
