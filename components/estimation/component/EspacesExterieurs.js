import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CardWithSize from "./CardWithSize";
import InputNumber from "./InputNumber";

const EspacesExterieurs = () => {
  const dispatch = useDispatch();
  const [selectedGarden, setSelectedGarden] = useState(null);
  const [selectedTerrasse, setSelectedTerrasse] = useState(null);
  const [selectedBalcon, setSelectedBalcon] = useState(null);
  const [surfaceGarden, setSurfaceGarden] = useState(null);

  useEffect(() => {
    if (selectedGarden !== null) {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { jardin: true },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { jardin: false },
      });
    }
    if (selectedTerrasse !== null) {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { terrasse: true },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { terrasse: false },
      });
    }
    if (selectedBalcon !== null) {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { balcon: true },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { balcon: false },
      });
    }
    if (surfaceGarden !== null) {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { surfaceGarden: surfaceGarden },
      });
    } else {
      dispatch({
        type: "SET_CLIENT_INFORMATION",
        payload: { surfaceGarden: 0 },
      });
    }
  }, [selectedGarden, selectedBalcon, selectedTerrasse, surfaceGarden]);

  return (
    <>
      <h2 className="text-2xl font-light lg:my-0 my-5 w-full max-w-[350px] text-blue-500">
        Espaces exterieurs de votre bien:
      </h2>
      <div className="flex w-full lg:justify-between flex-wrap max-w-[400px]">
        <CardWithSize
          title="Jardin"
          selected={selectedGarden}
          setSelected={setSelectedGarden}
        />
        <CardWithSize
          title="Terrasse"
          selected={selectedTerrasse}
          setSelected={setSelectedTerrasse}
        />
        <CardWithSize
          title="Balcon"
          selected={selectedBalcon}
          setSelected={setSelectedBalcon}
        />
      </div>
      {selectedGarden && (
        <div className="flex flex-col mt-5">
          <h3 className="font-light text-sm mb-3 text-gray-700">
            Quel est la surface de votre jardin ?
          </h3>
          <InputNumber
            placeholder="Surface"
            value={surfaceGarden}
            onChange={setSurfaceGarden}
          />
        </div>
      )}
    </>
  );
};

export default EspacesExterieurs;
