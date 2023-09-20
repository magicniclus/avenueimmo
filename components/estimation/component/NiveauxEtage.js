import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectWithIcon from "./SelectWithIcon";

const NiveauxEtage = () => {
  const etageMapping = {
    "1er étage": 1,
    "2eme étages": 2,
    "3eme étages": 3,
    "4eme étages": 4,
    "5eme étages": 5,
    "6eme étages ou +": 6,
  };

  const niveauxMapping = {
    "Plein pied": 0,
    "1 étage": 1,
    "2 étages": 2,
    "3 étages": 3,
    "4 étages": 4,
    "5 étages ou +": 5,
  };

  const dispatch = useDispatch();

  const type = useSelector((state) => state?.clientInfomation?.type);
  const [valueNiveaux, setValueNiveaux] = useState(0);
  const [valueEtages, setValueEtages] = useState(0);

  useEffect(() => {
    const niveauxValue = niveauxMapping[valueNiveaux];
    const etagesValue = etageMapping[valueEtages];
    if (type === "Appartement") {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { niveaux: niveauxValue, etages: etagesValue },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { etages: niveauxValue },
      });
    }
  }, [valueNiveaux, valueEtages]);

  return (
    <>
      <h2 className="text-2xl font-light lg:my-0 my-5 text-blue-500">
        Étages de votre bien :
      </h2>
      {type === "Appartement" ? (
        <div className="mt-5">
          <div className="flex flex-col">
            <h3 className="font-light text-sm mb-3 text-gray-700">
              À quel étage se situe votre appartement ?
            </h3>
            <SelectWithIcon
              options={Object.keys(etageMapping)}
              onChange={(value) => setValueEtages(value)}
            />
          </div>
          <div className="flex flex-col mt-5">
            <h3 className="font-light text-sm mb-3 text-gray-700">
              Combien de niveaux possède votre appartement ?
            </h3>
            <SelectWithIcon
              options={Object.keys(niveauxMapping)}
              onChange={(value) => setValueNiveaux(value)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <h3 className="font-light text-sm mb-3 text-gray-700">
            Combien de niveaux possède votre maison ?
          </h3>
          <SelectWithIcon
            options={Object.keys(niveauxMapping)}
            onChange={(value) => setValueNiveaux(value)}
          />
        </div>
      )}
    </>
  );
};

export default NiveauxEtage;
