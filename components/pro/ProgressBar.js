import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const step = useSelector((state) => state.pro.stepInProgress);
  const initialStep = useSelector((state) => state.pro.totalStep);
  return (
    <div className="mt-3 w-full">
      <div className="relative w-full max-w-[500px] h-2 bg-gray-200 rounded-md z-0 mx-auto">
        <div
          className={`absolute rounded-md h-[80%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out min-w-[10px]`}
          style={{
            width: `${(step * 100) / initialStep}%`,
            backgroundColor: "#3b82f6",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
