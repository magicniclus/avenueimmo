import React, { useState, useEffect } from "react";
import Card from "../Card";
import { useDispatch } from "react-redux";

const Status = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { status: selectedCard },
    });
  }, [selectedCard]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Quel est votre status ?
      </h1>
      <div className="mt-7">
        <Card
          title="Je suis patron d'agence"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Je suis mandataire"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Je suis indépendant avec la carte T"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Je suis salarié"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </>
  );
};

export default Status;
