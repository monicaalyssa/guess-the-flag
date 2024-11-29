import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

const FlagGuesser = ({ countries }) => {
const [currentFlag, setCurrentFlag] = useState(null);
const [countriesList, setCountriesList] = useState([]);
  
useEffect(() => {
    const shuffledCountries = [...countries].sort(() => Math.random() - 0.5)
    setCountriesList(shuffledCountries)
}, [countries])

  return (
    <>
      <Text>Flag logic goes here</Text>
      {countriesList.map((country, index) => (
        <p key={index}>{country.name}</p>
      ))}
    </>
  );
};

export default FlagGuesser;
