import React from "react";

const TextArea = (props) => {
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
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-[500px] w-full border px-4 py-3 rounded-md font-light text-normal outline-none text-gray-700"
      placeholder={placeholder || "Saisisez votre texte..."}
    />
  );
};

export default TextArea;
