import React from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { title, selectedCard, setSelectedCard, handleCardChange } = props;
  const typeOfCard = props.typeOfCard || null;
  const standing = useSelector((state) => state?.clientInformation?.standing);
  const isSelected = typeOfCard ? selectedCard : title === selectedCard;

  const handleClick = () => {
    if (typeOfCard) {
      handleCardChange(title);
    } else {
      setSelectedCard(title === selectedCard ? "" : title);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`w-full xs:mr-0 relative py-5 px-5 bg-white border rounded-md flex justify-center items-center cursor-pointer transition-all duration-100 hover:shadow-lg mt-2 ${
        isSelected ? "shadow-md" : ""
      }`}
      style={{ borderColor: "#3b82f6" }}
    >
      <p className="font-light text-sm" style={{ color: "#3b82f6" }}>
        {title}
      </p>
      <div className="w-4 h-4 bg-gray-200 rounded-full absolute top-1 right-1">
        <div
          className="w-3 h-3 rounded-full absolute top-0.5 right-0.5"
          style={{
            backgroundColor: "#3b82f6",
            display: isSelected ? "" : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
