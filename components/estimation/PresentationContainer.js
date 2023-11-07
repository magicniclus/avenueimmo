import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PresentationContainer = () => {
  const avantages = [
    {
      title: "Visualisez votre estimation en moins de 2 minutes.",
      icon: (
        <CheckBadgeIcon
          className="h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Des données précises ajustées en temps réel.",
      icon: (
        <CheckBadgeIcon
          className="h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Sans engagement, et vos données sont sécurisées.",
      icon: (
        <CheckBadgeIcon
          className="h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      ),
    },
  ];

  const stateUser = useSelector((state) => state?.user?.userInformation);

  const primaryColor = useSelector((state) => state?.user?.settings?.fontColor);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "USER_IS_LOADING", payload: true });
    if (stateUser) {
      dispatch({ type: "USER_IS_LOADING", payload: false });
    }
  }, [stateUser]);

  return (
    <div
      className=" h-full w-full lg:w-4/12 flex flex-col justify-center lg:min-h-[500px] lg:mb-0 mb-10 relative"
      style={{ color: primaryColor }}
    >
      <div>
        <h1 className="lg:text-6xl text-4xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
          Estimez votre bien en ligne{" "}
          <span className="inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
            gratuitement
          </span>
          .
        </h1>

        <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
        <ul className="mt-5">
          {avantages.map((avantage, index) => (
            <li className="flex items-center mb-1.5 text-gray-500" key={index}>
              {avantage.icon}
              <p className="ml-3 font-light text-[10px]">{avantage.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PresentationContainer;
