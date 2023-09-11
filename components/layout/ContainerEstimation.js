import React from "react";
import { useSelector } from "react-redux";

const ContainerEstimation = (props) => {
  const stateFontColor = useSelector(
    (state) => state?.user?.settings?.fontColor
  );
  const stateFontColor2 = useSelector(
    (state) => state?.user?.settings?.fontColor2
  );
  return (
    <div className="lg:w-full sm:w-11/12 w-full max-w-[1250px] min-h-[450px] px-5 py-10 lg:px-20 lg:py-16 flex items-center justify-between flex-col lg:flex-row relative z-20">
      <div className="absolute -top-1 -right-1 z-20 w-32 h-32 overflow-hidden lg:block hidden"></div>
      {props.children}
    </div>
  );
};

export default ContainerEstimation;
