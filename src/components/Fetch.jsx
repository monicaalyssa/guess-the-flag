import { Text } from "@mantine/core";
import { useState } from "react";

const Fetch = () => {
  const [countries, setCountries] = useState([]);

  fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((response) => response.json())
    .then((data) => {
      const flagData = data.map((country) => {
        return {
          name: country.name.common,
          flag: country.flags.svg
        };
      });
      setCountries(flagData);
    })
    .catch((error) => console.error(error));

  return (
    <>
    <Text>Flag data for all countries and dependent territories</Text>
      {countries.map((country, index) => (
        <p key={index}>
            Index: {index}, Flag URL: {country.flag}, Country Name: {country.name}
        </p>
      ))}
    </>
  );
};

export default Fetch;
