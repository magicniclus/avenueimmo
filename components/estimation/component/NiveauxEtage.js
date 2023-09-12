import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectWithIcon from "./SelectWithIcon";

const NiveauxEtage = () => {
  const optionsEtage = [
    "1er étage",
    "2eme étages",
    "3eme étages",
    "4eme étages",
    "5eme étages",
    "6eme étages ou +",
  ];
  const optionsNiveaux = [
    "Plein pied",
    "1 étage",
    "2 étages",
    "3 étages",
    "4 étages",
    "5 étages ou +",
  ];
  const dispatch = useDispatch();

  const type = useSelector((state) => state?.clientInfomation?.type);
  const [valueNiveaux, setValueNiveaux] = useState(0);
  const [valueEtages, setValueEtages] = useState(0);
  useEffect(() => {
    if (type === "Appartement") {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { niveaux: valueNiveaux, etages: valueEtages },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { etages: valueNiveaux },
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
            <SelectWithIcon options={optionsEtage} onChange={setValueEtages} />
          </div>
          <div className="flex flex-col mt-5">
            <h3 className="font-light text-sm mb-3 text-gray-700">
              Combien de niveaux possède votre appartement ?
            </h3>
            <SelectWithIcon
              options={optionsNiveaux}
              onChange={setValueNiveaux}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <h3 className="font-light text-sm mb-3 text-gray-700">
            Combien de niveaux possède votre maison ?
          </h3>
          <SelectWithIcon options={optionsNiveaux} onChange={setValueNiveaux} />
        </div>
      )}
    </>
  );
};

export default NiveauxEtage;
