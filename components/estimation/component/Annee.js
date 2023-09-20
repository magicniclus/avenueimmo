import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectWithIcon from "./SelectWithIcon";

const Annee = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const options = [
    { label: "Avant 1944", value: 3 },
    { label: "Entre 1945 et 1974", value: 4 },
    { label: "Entre 1975 et 1989", value: 5 },
    { label: "Entre 1990 et 2009", value: 6 },
    { label: "Après 2010", value: 7 },
  ];

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { annee: value },
    });
  }, [value]);

  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        L'année de construction de votre bien :
      </h2>
      <div className="flex">
        <SelectWithIcon
          options={options.map((opt) => opt.label)}
          onChange={(selectedLabel) => {
            const selectedValue = options.find(
              (opt) => opt.label === selectedLabel
            ).value;
            setValue(selectedValue);
          }}
        />
      </div>
    </>
  );
};

export default Annee;
