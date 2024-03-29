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
  const price = useSelector((state) => state?.clientInfomation?.predictedPrice);
  const priceMin = useSelector(
    (state) => state?.clientInfomation?.confidenceMin
  );
  const priceMax = useSelector(
    (state) => state?.clientInfomation?.confidenceMax
  );
  const m2 = useSelector((state) => state?.clientInfomation?.priceM2);
  const notation = useSelector(
    (state) => state?.clientInfomation?.confidenceIndex
  );
  const tags = [
    clientSurface + " m2",
    nbrChambre + (nbrChambre > 1 ? " chambres" : " chambre"),
    nbrPiece + (nbrPiece > 1 ? " pièces" : " pièce"),
    capitalizeFirstLetter(type),
  ];

  return (
    <div className=" lg:w-7/12 flex flex-col items-center min-w-[100%] mx-auto bg-white mt-44 shadow-md md:py-16 py-10 md:px-0 px-5">
      <h1 className="text-3xl mt-10 lg:mt-0 mb-10 text-gray-700 md:text-start text-center">
        Résultat de votre <span className=" text-blue-500">estimation</span>
      </h1>
      <div className="flex items-center text-blue-500">
        <MapPinIcon className="h-6 w-6 rounded-full mr-2 " />
        <p className="text-gray-700 text-2xl">{clientAdresse}</p>
      </div>
      <ul className="flex flex-wrap">
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
      <div className="flex items-center lg:items-end justify-between lg:flex-row flex-col w-7/12">
        <div className="lg:flex hidden mt-3 flex-col items-center">
          <p className="text-gray-700">Prix bas:</p>
          <h2 className="ml-2 text-2xl text-gray-700">
            {formatNumberWithSpaces(Math.floor(priceMin * 0.91))}€
          </h2>
        </div>
        <div className="mt-10">
          <div className="mt-5 flex flex-col items-center">
            <p className="text-mdt text-gray-700">Prix net vendeur</p>
            <h2 className="text-6xl mt-1 text-blue-500">
              {formatNumberWithSpaces(Math.floor(price * 0.91))}€
            </h2>
          </div>
          <p className=" text-gray-700 text-center">
            Soit {formatNumberWithSpaces(Math.floor(m2))}€/m<sup>2</sup>
          </p>
        </div>
        <div className="lg:hidden flex mt-3 flex-col items-center">
          <p className="text-gray-700">Prix bas:</p>
          <h2 className="ml-2 text-2xl text-gray-700">
            {formatNumberWithSpaces(Math.floor(priceMin * 0.91))}€
          </h2>
        </div>
        <div className="flex mt-3 flex-col items-center">
          <p className="text-gray-700">Prix haut:</p>
          <h2 className="ml-2 text-2xl text-gray-700">
            {formatNumberWithSpaces(Math.floor(priceMax * 0.91))}€
          </h2>
        </div>
      </div>
      <div className="w-5/12 h-0.5 bg-gray-200 mt-10" />
      <Stars notation={notation} />
      <div className="w-5/12 h-0.5 bg-gray-200 mt-10" />
      <h3 className="mt-10">
        <span className="text-blue-500">1346 acheteurs</span> recherche un bien
        comme le votre.
      </h3>
    </div>
  );
};

export default Resultat;
