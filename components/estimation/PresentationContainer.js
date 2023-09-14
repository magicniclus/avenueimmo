import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PresentationContainer = () => {
  const avantages = [
    {
      title: "Visualisez votre estimation en moins de 2 minutes",
      icon: (
        <CheckBadgeIcon
          className="h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Des données précise ajustées en temps réel.",
      icon: (
        <CheckBadgeIcon
          className="h-4 w-4 text-yellow-500"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Sans engagement et vos données sont sécurisées  ",
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
      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#93c5fd] to-[#1e40af] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#93c5fd] to-[#1e40af] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
    </div>
  );
};

export default PresentationContainer;
