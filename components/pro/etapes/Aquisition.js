import React, { useState, useEffect } from "react";
import Card from "../Card";
import { useDispatch } from "react-redux";

const Aquisition = () => {
  const [selectedPige, setSelectedPige] = useState("");
  const [selectedPorte, setSelectedPorte] = useState("");
  const [selectedLead, setSelectedLead] = useState("");
  const [selectedBouche, setSelectedBouche] = useState("");
  const [selectedPromoteurs, setSelectedPromoteurs] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedPige !== null) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: { pige: selectedPige },
      });
    }
    if (selectedPorte !== null) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: { porte: selectedPorte },
      });
    }
    if (selectedLead !== null) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: { lead: selectedLead },
      });
    }
    if (selectedBouche !== null) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: { bouche: selectedBouche },
      });
    }
    if (selectedPromoteurs !== null) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: { promoteurs: selectedPromoteurs },
      });
    }
  }, [
    selectedBouche,
    selectedLead,
    selectedPige,
    selectedPorte,
    selectedPromoteurs,
  ]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Ou trouvez-vous vos mandats aujourd'hui ?
      </h1>
      <div className="mt-7">
        <Card
          title="Pige"
          selectedCard={selectedPige}
          setSelectedCard={setSelectedPige}
        />
        <Card
          title="Porte-à-porte"
          selectedCard={selectedPorte}
          setSelectedCard={setSelectedPorte}
        />
        <Card
          title="Achat de leads vendeurs"
          selectedCard={selectedLead}
          setSelectedCard={setSelectedLead}
        />
        <Card
          title="Bouche-à-oreille"
          selectedCard={selectedBouche}
          setSelectedCard={setSelectedBouche}
        />
        <Card
          title="Promoteurs"
          selectedCard={selectedPromoteurs}
          setSelectedCard={setSelectedPromoteurs}
        />
      </div>
    </>
  );
};

export default Aquisition;
