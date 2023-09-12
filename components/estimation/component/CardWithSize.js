import React from "react";

const CardWithSize = (props) => {
  const { title, selected, setSelected } = props;
  const handleClick = () => {
    if (selected !== title) {
      setSelected(title);
    } else {
      setSelected(null);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`mr-5 mt-2  relative w-24 py-5 bg-white border rounded-md flex justify-center items-center cursor-pointer transition-all duration-100 hover:shadow-lg ${
        selected ? "shadow-md" : null
      }`}
      style={{ borderColor: "#3b82f6" }}
    >
      <p className=" font-light text-sm" style={{ color: "#3b82f6" }}>
        {title}
      </p>
      <div className="w-4 h-4 bg-gray-200 rounded-full absolute top-1 right-1">
        <div
          className="w-3 h-3 rounded-full absolute top-0.5 right-0.5"
          style={{
            backgroundColor: "#3b82f6",
            display: selected ? "" : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardWithSize;
