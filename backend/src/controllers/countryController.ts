import axios from "axios";
import { Request, Response } from "express";

interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string[] | null;
}

interface FlagResponse {
  flag: string;
  iso2: string;
}

export const getAvailableCountries = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Failed to fetch countries");
  }
};
export const getCountryInfo = async (req: any, res: any) => {
  const { countryCode } = req.params;

  try {
    const countryInfoResponse = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    const countryInfo: BorderCountry = countryInfoResponse.data;

    const populationResponse = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    const populationData = populationResponse.data.data.find(
      (item: any) => item.iso3 === countryCode
    );
    const population = populationData
      ? populationData.populationCounts
      : "Data not available";

    const flagResponse = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    const flagData: FlagResponse[] = flagResponse.data.data;
    const countryFlag = flagData.find(
      (flag) => flag.iso2 === countryCode
    )?.flag;

    if (!countryInfo || !population || !countryFlag) {
      return res.status(404).json({ error: "Country details not found." });
    }

    return res.json({
      country: {
        name: countryInfo.commonName,
        officialName: countryInfo.officialName,
        countryCode: countryInfo.countryCode,
        region: countryInfo.region,
        borders: countryInfo.borders,
        population,
        flag: countryFlag,
      },
    });
  } catch (error) {
    console.error("Error fetching country details:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching country details." });
  }
};
