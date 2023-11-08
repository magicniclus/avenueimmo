import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import InputString from "../InputString";

const NomAgence = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { nomAgence: value },
    });
  }, [value]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Comment s'appelle votre réseau / agence ?
      </h1>
      <div className="mt-7">
        <InputString placeholder="Agence" value={value} onChange={setValue} />
      </div>
    </>
  );
};

export default NomAgence;
