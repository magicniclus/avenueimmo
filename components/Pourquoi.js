import React from "react";

const Pourquoi = () => {
  return (
    <section className=" lg:w-7/12 flex flex-col min-w-[100%] mx-auto md:py-16 py-10  md:px-0 px-5">
      <h2 className="text-gray-700 text-2xl">
        Pourquoi passer par un agent pour évaluer votre bien au{" "}
        <span className="text-blue-500">meilleur prix</span>?
      </h2>
      <div className="flex flex-wrap lg:flex-row flex-col">
        <div className=" lg:w-5/12  mr-7">
          <h3 className="mt-10 text-lg">1-Expertise du marché local :</h3>
          <p className="text-gray-500 text-xs mt-5">
            L'agence dispose d'une vue d'ensemble des transactions récentes dans
            votre secteur, garantissant ainsi une tarification en phase avec la
            réalité du marché.
          </p>
        </div>
        <div className="lg:w-5/12">
          <h3 className="mt-10 text-lg">
            2-Évaluation en personne de votre propriété :
          </h3>
          <p className="text-gray-500 text-xs mt-5">
            L'agence prend le temps d'inspecter minutieusement votre bien, en
            considérant ses caractéristiques uniques (comme le parquet, la
            cheminée...) pour déterminer une estimation au plus proche de sa
            valeur réelle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pourquoi;
