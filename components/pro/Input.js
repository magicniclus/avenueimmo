import React from "react";

const Input = (props) => {
  const value = props.value;
  const setValue = props.onChange;
  const type = props.type;
  const placeholder = props.placeholder;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setValue(null);
    } else if (Number.isInteger(Number(inputValue))) {
      setValue(parseInt(inputValue, 10));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <input
      type="number"
      value={value}
      step="1"
      onChange={handleInputChange}
      className="max-w-[500px] w-full border px-4 py-3 rounded-md font-light text-normal outline-none text-gray-700"
      placeholder={placeholder || "Entrez la surface..."}
      style={{ borderColor: "#3b82f6" }}
      onKeyPress={handleKeyPress}
      onWheel={(e) => e.preventDefault()}
    />
  );
};

export default Input;
