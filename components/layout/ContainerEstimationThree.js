import React from "react";

const ContainerEstimationThree = (props) => {
  return (
    <div
      id="estimation"
      className="relative lg:w-full sm:w-11/12 w-full max-w-[1250px] min-h-[450px] lg:px-20 flex items-center justify-between flex-col lg:flex-row z-20 rounded-lg"
    >
      <div className="absolute inset-x-0 top-0 h-[450px] bg-[url('/houses/bg-bulding.jpg')] bg-cover bg-center z-[-1]"></div>

      <div className="absolute -top-1 -right-1 z-20 w-32 h-32 overflow-hidden lg:block hidden px-5"></div>
      {props.children}
    </div>
  );
};

export default ContainerEstimationThree;
