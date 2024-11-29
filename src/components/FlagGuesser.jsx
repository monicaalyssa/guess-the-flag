import { Button, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";

const FlagGuesser = ({ countries }) => {
const [currentFlag, setCurrentFlag] = useState(null);
const [countriesList, setCountriesList] = useState([]);
const [countriesCounter, setCountriesCounter] = useState(null);
const [correctGuesses, setCorrectGuesses] = useState(0);
  
useEffect(() => {
    const shuffledCountries = [...countries].sort(() => Math.random() - 0.5)
    setCountriesList(shuffledCountries)
    setCurrentFlag(shuffledCountries[0])
    setCountriesCounter(shuffledCountries.length)
}, [countries])

const checkGuess = (value) => {
    if (value === currentFlag.name) {
        alert('You guessed correctly!')
        if (countriesList.includes(currentFlag)) {
            setCountriesList((prevList) => prevList.filter((country) => country !== currentFlag));
            setCountriesCounter((prevCounter) => prevCounter -1);
            setCurrentFlag(countriesList[1])
            setCorrectGuesses((prev) => prev + 1)
        }
    } else {
        alert('Wrong')
    }
}

  return (
    <>
      {currentFlag &&
      <>
        <p>Current flag: {currentFlag.name}</p>
        <Image w={200} src={currentFlag.flag}></Image>
        <Button onClick={() => checkGuess(currentFlag.name)} value={currentFlag.name}>{currentFlag.name}</Button>
        <Button onClick={() => checkGuess("Random Wrong Country")}>Wrong</Button>
      </>
      }
      <Text>Correct Guesses: {correctGuesses} / 250</Text>
      <Text>Countries & territories left to guess: {countriesCounter}</Text>
      {countriesList.map((country, index) => (
        <p key={index}>{country.name}</p>
      ))}
    </>
  );
};

export default FlagGuesser;
