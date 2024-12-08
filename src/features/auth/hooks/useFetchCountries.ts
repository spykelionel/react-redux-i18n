import { useEffect } from "react";
import { Country } from "../types";

export const useFetchCountries = (setter: (data: any) => void) => {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((response) => response.json())
      .then((data) => {
        const formattedCountries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setter(
          formattedCountries.sort((a: Country, b: Country) =>
            a.name.localeCompare(b.name),
          ),
        );
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
};
