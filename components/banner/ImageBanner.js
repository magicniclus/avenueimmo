import React from "react";

const ImageBanner = () => {
  return (
    <div className="w-full px-5 lg:flex lg:justify-between  max-w-[1250px] mx-auto mt-20 max-h-[200px] overflow-hidden rounded-lg relative">
      <img
        src="./logos/banner.png"
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="w-full absolute bottom-0 right-0 h-full bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 opacity-10" />
    </div>
  );
};

export default ImageBanner;
