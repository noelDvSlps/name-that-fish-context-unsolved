import React, { useState, createContext } from "react";
import { Images } from "../assets/images";
import PropTypes from 'prop-types';
import { useContext } from "react";
export const FishContext = createContext({});

export const FishProvider = ({ children }) => {
  const initialFishes = [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
  ];

  const [counter, setCounter] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const handleFishGuess = (guess) => {
    const arr = initialFishes.filter((_item, index) => index > counter - 1);
    if (guess.toLowerCase().trim() === arr[0].name) {
      setCorrectCount(correctCount + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  };

  const answersLeft = initialFishes
    .map((item) => item.name)
    .filter((_item, index) => index > counter - 1);

  return (
    <FishContext.Provider
      value={{
        initialFishes,
        setCounter,
        counter,
        answersLeft,
        correctCount: correctCount,
        incorrectCount: incorrectCount,
        handleFishGuess,
        totalCount: counter
      }}
    >
      {children}
    </FishContext.Provider>
  );
};

export const useFish = () => {
  const context = useContext(FishContext);
  return context
}
//is this fine? i am having missing in props validation error and this is my solution
FishProvider.propTypes = {
    children: PropTypes.node.isRequired,
};