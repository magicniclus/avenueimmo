import React from "react";
import EstimationLayout from "../components/layout/EstimationLayout";
import Estimation from "../components/estimation/Estimation";
import Header from "../components/header/Header";

const Accueil = () => {
  return (
    <>
      <Header />
      <EstimationLayout>
        <Estimation />
      </EstimationLayout>
    </>
  );
};

export default Accueil;
