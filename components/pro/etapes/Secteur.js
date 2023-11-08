import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";

const Secteur = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { secteur: value },
    });
  }, [value]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Quel est votre secteur d'activité ?
      </h1>
      <div className="mt-7">
        <Input
          placeholder="Entrez un code postal"
          type="CP"
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default Secteur;
