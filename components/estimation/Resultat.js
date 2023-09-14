import React from "react";

import { useSelector } from "react-redux";

import { MapPinIcon } from "@heroicons/react/20/solid";
import { capitalizeFirstLetter, formatNumberWithSpaces } from "../../lib/utils";
import Stars from "./Stars";

const Resultat = () => {
  const clientAdresse = useSelector(
    (state) => state?.clientInfomation?.adresse
  );
  const clientSurface = useSelector(
    (state) => state?.clientInfomation?.surface
  );
  const nbrChambre = useSelector((state) => state?.clientInfomation?.chambres);
  const nbrPiece = useSelector((state) => state?.clientInfomation?.pieces);
  const type = useSelector((state) => state?.clientInfomation?.type);
  const price = useSelector(
    (state) => state?.clientInfomation?.data?.mainValuation?.predicted_price
  );
  const priceMin = useSelector(
    (state) => state?.clientInfomation?.data?.mainValuation?.confidence_min
  );
  const priceMax = useSelector(
    (state) => state?.clientInfomation?.data?.mainValuation?.confidence_max
  );
  const m2 = useSelector(
    (state) => state?.clientInfomation?.data?.mainValuation?.price_m2
  );
  const notation = useSelector(
    (state) => state?.clientInfomation?.data?.mainValuation?.confidence_index
  );

  const tags = [
    clientSurface + " m2",
    nbrChambre + (nbrChambre > 1 ? " chambres" : " chambre"),
    nbrPiece + (nbrPiece > 1 ? " pièces" : " pièce"),
    capitalizeFirstLetter(type),
  ];

  return (
    <div className=" lg:w-7/12">
      <h1 className="text-3xl mt-10 lg:mt-0 mb-10 text-gray-700">
        Voici le résultat de votre{" "}
        <span className=" text-blue-500">estimation</span>
      </h1>
      <div className="flex items-center text-blue-500">
        <MapPinIcon className="h-6 w-6 rounded-full mr-2 " />
        <p>{clientAdresse}</p>
      </div>
      <ul className="flex flex-wrap  mb-10">
        {tags &&
          tags.map((item, idx) => {
            return (
              <li
                className="w-max px-2 py-1 rounded-full text-xs font-light mr-2 mt-2 text-blue-500 border-blue-500 border"
                key={idx}
              >
                {item}
              </li>
            );
          })}
      </ul>
      <div className="mt-10">
        <div className="mt-5">
          <p className="text-md font-light text-blue-500">Prix net vendeur</p>
          <h2 className="text-6xl mt-1 text-blue-500">
            {formatNumberWithSpaces(Math.floor(price))}€
          </h2>
        </div>
        <p className=" text-blue-500">
          Soit {formatNumberWithSpaces(Math.floor(m2))}€/m<sup>2</sup>
        </p>
      </div>
      <div className="mt-10">
        <div className="flex mt-3 items-end">
          <p className="text-gray-700">Prix bas:</p>
          <h2 className="ml-2 text-2xl text-blue-500">
            {formatNumberWithSpaces(Math.floor(priceMin))}€
          </h2>
        </div>
        <div className="flex mt-3 items-end">
          <p className="text-gray-700">Prix haut:</p>
          <h2 className="ml-2 text-2xl text-blue-500">
            {formatNumberWithSpaces(Math.floor(priceMax))}€
          </h2>
        </div>
      </div>
      <Stars notation={notation} />
    </div>
  );
};

export default Resultat;
