import { Button, Flex, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import HelpHint from "./HelpHint";

const FlagGuesser = ({ countries }) => {
const [currentFlag, setCurrentFlag] = useState(null);
const [countriesList, setCountriesList] = useState([]);
const [countriesCounter, setCountriesCounter] = useState(null);
const [correctGuesses, setCorrectGuesses] = useState(0);
const [wrongAnswer1, setWrongAnswer1] = useState(null);
const [wrongAnswer2, setWrongAnswer2] = useState(null);
const [randomOrder, setRandomOrder] = useState([])
const order = [1, 2, 3];
const [hint, setHint] = useState(false)
  
useEffect(() => {
    const shuffledCountries = [...countries].sort(() => Math.random() - 0.5)
    setCountriesList(shuffledCountries)
    setCurrentFlag(shuffledCountries[0])
    setCountriesCounter(shuffledCountries.length)
}, [countries])

useEffect(() => {
    const wrongAnswers = () => {
        const wrongAnswersWithoutCurrent = countries.filter(
            (currentCountry) => currentCountry.name !== currentFlag.name
        );
        const wrongAnswerIndex = [...wrongAnswersWithoutCurrent].sort(() => Math.random() - 0.5)
        return (
            wrongAnswerIndex,
            setWrongAnswer1(wrongAnswerIndex[1]),
            setWrongAnswer2(wrongAnswerIndex[2])
        )
    }
    wrongAnswers()
}, [countriesCounter, countriesList, currentFlag])

const checkGuess = (value) => {
    if (value === currentFlag.name) {
        alert('You guessed correctly!')
        if (countriesList.includes(currentFlag)) {
            setCountriesList((prevList) => prevList.filter((country) => country !== currentFlag));
            setCountriesCounter((prevCounter) => prevCounter -1);
            setCorrectGuesses((prev) => prev + 1);
            setHint(false);
        }
    } else {
        alert('Wrong')
    }
}

useEffect (() => {
    setCurrentFlag(countriesList[0])
    const randomButtonOrder = () => {
        const shuffledOrder = [...order].sort(() => Math.random() - 0.5)
        setRandomOrder(shuffledOrder)
    }
    randomButtonOrder()
}, [countriesList])

  return (
    <>
      {currentFlag && wrongAnswer1 && wrongAnswer2 && randomOrder &&      
      <>
        {/*<p>Current flag: {currentFlag.name}</p>    <Text>Flags left to guess: {countriesCounter}</Text>*/}
        
        <Text mt="md">Correct Guesses: {correctGuesses} / 250</Text>
        
        <Flex align="center" justify="center" h={200}>
        <Image w={200} src={currentFlag.flag}></Image>
        </Flex>
        <Flex my="lg" w={400} align="center" justify="center" direction="column" gap={12}>
            <Button fullWidth variant="default" style={{order: randomOrder[0]}} onClick={() => checkGuess(currentFlag.name)} value={currentFlag.name}>{currentFlag.name}</Button>
            <Button fullWidth variant="default" style={{order: randomOrder[1]}} onClick={() => checkGuess(wrongAnswer1.name)}>{wrongAnswer1.name}</Button>
            <Button fullWidth variant="default" style={{order: randomOrder[2]}} onClick={() => checkGuess(wrongAnswer2.name)}>{wrongAnswer2.name}</Button>
        </Flex>
        <HelpHint hint={hint} countryHint={currentFlag.continent} setHint={setHint}/>
      </>
      }
    </>
  );
};

export default FlagGuesser;
