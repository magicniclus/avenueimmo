import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";

const Mandat = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { nbrVente: value },
    });
  }, [value]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Combien de transaction avez-vous réalisées dans les 12 derniers mois ?
      </h1>
      <div className="mt-7">
        <Input
          placeholder="Nombre de transaction réalisé"
          type="CP"
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default Mandat;
