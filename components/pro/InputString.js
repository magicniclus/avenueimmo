import React from "react";

const InputString = (props) => {
  const value = props.value;
  const setValue = props.onChange;
  const type = props.type;
  const placeholder = props.placeholder;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <input
      type="string"
      value={value}
      step="1"
      onChange={(e) => setValue(e.target.value)}
      className="max-w-[500px] w-full border px-4 py-3 rounded-md font-light text-normal outline-none text-gray-700"
      placeholder={placeholder || "Entrez la surface..."}
      style={{ borderColor: "#3b82f6" }}
      onKeyPress={handleKeyPress}
      onWheel={(e) => e.preventDefault()}
    />
  );
};

export default InputString;
