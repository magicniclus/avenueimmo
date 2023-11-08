import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";

const Objectifs = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { objectifs: value },
    });
  }, [value]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Quel est votre objectif de ventes pour les 12 prochains mois ?
      </h1>
      <div className="mt-7">
        <Input
          placeholder="Transactions"
          type="CP"
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default Objectifs;
