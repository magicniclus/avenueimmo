import React, { useState, useEffect } from "react";
import Card from "../Card";
import { useDispatch } from "react-redux";

const Aquisition = () => {
  const [selectedCard, setSelectedCard] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { aquisition: selectedCard },
    });
  }, [selectedCard]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Ou trouvez-vous vos mandats aujourd'hui ?
      </h1>
      <div className="mt-7">
        <Card
          title="Pige"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Porte-à-porte"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Achat de leads vendeurs"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Bouche-à-oreille"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
        <Card
          title="Promoteurs"
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </>
  );
};

export default Aquisition;
