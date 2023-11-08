import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextArea from "../TextArea";

const Pourquoi = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_PRO_INFORMATION",
      payload: { candidature: value },
    });
  }, [value]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Pourquoi devrions-nous travailler ensemble ?
      </h1>
      <h2>
        Nous avons un unique partenaire par secteur, nous devons donc
        selectionner avec minutie notre partanaire afin de répondre à la
        demande.
      </h2>
      <div className="mt-7">
        {/* <TextArea placeholder="Agence" value={value} onChange={setValue} /> */}
      </div>
    </>
  );
};

export default Pourquoi;
