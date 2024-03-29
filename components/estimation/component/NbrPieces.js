import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputNumber from "./InputNumber";

const NbrPieces = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { pieces: value },
    });
  }, [value]);
  return (
    <>
      <h2 className="text-2xl font-light lg:my-0 my-5 w-full max-w-[350px] text-blue-500">
        Nombre de pièce de votre bien :
      </h2>
      <div className="flex">
        <InputNumber
          value={value}
          onChange={setValue}
          type="Pcs"
          placeholder="Entrez le nombre de pièce"
        />
      </div>
    </>
  );
};

export default NbrPieces;
