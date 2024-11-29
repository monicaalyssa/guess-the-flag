import { Button, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";

const FlagGuesser = ({ countries }) => {
const [currentFlag, setCurrentFlag] = useState(null);
const [countriesList, setCountriesList] = useState([]);
const [countriesCounter, setCountriesCounter] = useState(null);
  
useEffect(() => {
    const shuffledCountries = [...countries].sort(() => Math.random() - 0.5)
    setCountriesList(shuffledCountries)
    setCurrentFlag(shuffledCountries[0])
    setCountriesCounter(shuffledCountries.length)
}, [countries])

const removeCorrectGuess = () => {
    if (countriesList.includes(currentFlag)) {
        setCountriesList((prevList) => prevList.filter((country) => country !== currentFlag));
        setCountriesCounter((prevCounter) => prevCounter -1);
        setCurrentFlag(countriesList[1])
    }
}

  return (
    <>
      {currentFlag &&
      <>
        <p>Current flag: {currentFlag.name}</p>
        <Image w={200} src={currentFlag.flag}></Image>
      </>
      }
      <Text>Countries & Territories Flags Counter: {countriesCounter}</Text>
      
      {countriesList.map((country, index) => (
        <p key={index}>{country.name}</p>
      ))}
    </>
  );
};

export default FlagGuesser;
