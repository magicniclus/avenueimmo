import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectWithIcon from "./SelectWithIcon";

const ClassementEnergetique = () => {
  const options = ["A", "B", "C", "D", "E", "F", "G"];
  const dispatch = useDispatch();

  const [valueDPE, setValueDPE] = useState(0);
  const [valueGES, setValueGES] = useState(0);
  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { dpe: valueDPE, ges: valueGES },
    });
  }, [valueDPE, valueGES]);
  return (
    <div>
      <h2 className="text-2xl font-light lg:my-0 my-5 text-blue-500">
        Classement énergetique de votre bien :
      </h2>
      <div className="mt-5">
        <div className="flex flex-col">
          <h3 className="font-light text-sm mb-3 text-gray-700">DPE </h3>
          <SelectWithIcon options={options} onChange={setValueDPE} />
        </div>
        <div className="flex flex-col mt-5">
          <h3 className="font-light text-sm mb-3 text-gray-700">GSE </h3>
          <SelectWithIcon options={options} onChange={setValueGES} />
        </div>
      </div>
    </div>
  );
};

export default ClassementEnergetique;
