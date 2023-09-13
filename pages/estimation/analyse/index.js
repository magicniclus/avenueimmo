import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import ContainerEstimationTwo from "../../../components/layout/ContainerEstimationTwo";
import EstimationLayout from "../../../components/layout/EstimationLayout";
import AnalysePresentation from "../../../components/estimation/component/AnalysePresentation";
import AnalyseLoader from "../../../components/estimation/component/AnalyseLoader";
import Loader from "../../../components/loader/Loader";
import HeaderWithoutNav from "../../../components/header/HeaderWithoutNav";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const getUserAdresse = useSelector(
    (state) => state?.clientInfomation?.adresse
  );
  const clientInfomation = useSelector(
    (state) => state?.clientInfomation?.adresse
  );

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const currentSlug = pathSegments[1];

  useEffect(() => {
    if (getUserAdresse) {
      setIsLoading(true);
    }
  }, [getUserAdresse]);

  const handleRoute = () => {
    router.push(`/estimation/analyse`);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!clientInfomation) {
        router.push({
          pathname: "/",
        });
      }
    }, 1000);
  }, [clientInfomation]);

  return (
    <>
      <HeaderWithoutNav />
      <EstimationLayout>
        <ContainerEstimationTwo>
          {!isLoading && (
            <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-10">
              <Loader />
            </div>
          )}
          <div className="lg:min-h-[600px] flex flex-col justify-center w-full lg:w-4/12">
            {/* <UserInformation /> */}
            <AnalysePresentation />
          </div>
          <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" />
          {/* <div className="w-full h-0.5 bg-gray-100 lg:hidden flex mt-7 lg:mt-0" /> */}
          <AnalyseLoader />
        </ContainerEstimationTwo>
      </EstimationLayout>
    </>
  );
};

export default index;
