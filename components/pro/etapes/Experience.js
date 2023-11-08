import React, { useState, useEffect } from "react";
import Card from "../Card";
import { useDispatch } from "react-redux";

const Experience = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { experience: selectedCard },
    });
  }, [selectedCard]);
  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Depuis combien de temps exercez-vous votre activité ?
      </h1>
      <div className="mt-7">
        <Card
          title="Je commence tout juste"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="1 à 3 ans"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="3 à 10 ans"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Plus de 10 ans"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </>
  );
};

export default Experience;
