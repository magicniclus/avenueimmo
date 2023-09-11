import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PresentationContainer from "./PresentationContainer";
import Map from "./Map";
import SearchMapBar from "./SearchMapBar";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import ContainerEstimation from "../layout/ContainerEstimation";

const Estimation = () => {
  const router = useRouter();

  const primaryColor = useSelector((state) => state?.user?.settings?.fontColor);
  const secondaryColor = useSelector(
    (state) => state?.user?.settings?.fontColor2
  );
  const userName = useSelector(
    (state) => state?.user?.userInformation?.lastName
  );

  const stateMapIsLoading = useSelector((state) => state?.mapIsLoading);
  const stateUserIsLoading = useSelector((state) => state?.userIsLoading);

  // Vérifiez si l'URL contient 'dashboard'
  const isDashboard = router.asPath.includes("dashboard");

  return (
    <ContainerEstimation>
      {stateMapIsLoading && stateUserIsLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
      <PresentationContainer />
      {/* <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" /> */}
      <div className="w-9/12 h-0.5 bg-gray-100 lg:hidden flex mb-7 mt-0" />
      <div className="w-full lg:w-6/12 min-h-[400px]  lg:min-h-[500px] h-full flex flex-col justify-around">
        <SearchMapBar />
        <div>
          <Map />
          <a
            href="#"
            className="text-gray-400 font-light text-xs hover:scale-105 transition ease-out"
          >
            Propulsé par Estimmea
          </a>
        </div>
      </div>
    </ContainerEstimation>
  );
};

export default Estimation;
