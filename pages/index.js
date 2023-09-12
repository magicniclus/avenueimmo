import React from "react";
import EstimationLayout from "../components/layout/EstimationLayout";
import Estimation from "../components/estimation/Estimation";
import Header from "../components/header/Header";
import Breadrumb from "../components/breadCrumb/BreadCrumb";

const Accueil = () => {
  return (
    <>
      <Header />
      <EstimationLayout>
        <Estimation />
      </EstimationLayout>
      <Breadrumb list={["ACCUEIL", "ESTIMATION"]} />
    </>
  );
};

export default Accueil;
