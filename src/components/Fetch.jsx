import { Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import FlagGuesser from "./FlagGuesser";

const Fetch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
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
  }, [])

  return (
  <>
    <FlagGuesser countries={countries}></FlagGuesser>
  </>
  );
};

export default Fetch;
