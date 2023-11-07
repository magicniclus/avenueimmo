import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputNumber from "./InputNumber";

const Souhaits = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { prixVoulu: value },
    });
  }, [value]);
  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        A quel prix souhaitez-vous vendre ?
      </h2>
      <div className="flex">
        <InputNumber
          value={value}
          onChange={setValue}
          placeholder="Prix souhaité"
          type="€"
        />
      </div>
    </>
  );
};

export default Souhaits;
