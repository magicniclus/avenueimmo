import React from "react";

const Sart = () => {
  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Postulez pour devenir partenaire{" "}
        <span className="inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
          exclusif
        </span>{" "}
        sur{" "}
        <span className="inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
          votre secteur
        </span>
        .
      </h1>
      <h2 className="text-center mt-10 text-xl">
        Nous recrutons un <span className="font-bold">unique partenaire</span>{" "}
        par <span className="font-bold">ville de France</span>.
      </h2>
    </>
  );
};

export default Sart;
