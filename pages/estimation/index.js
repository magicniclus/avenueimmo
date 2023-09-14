import React, { useEffect } from "react";
import EstimationLayout from "../../components/layout/EstimationLayout";
import ContainerEstimationTwo from "../../components/layout/ContainerEstimationTwo";
import EtapeEstimationContainer from "../../components/estimation/EtapeEstimationContainer";
import { useSelector } from "react-redux";
import EstimationManager from "../../components/estimation/EstimationManager";
import Loader from "../../components/loader/Loader";
import { useRouter } from "next/router";
import HeaderWithoutNav from "../../components/header/HeaderWithoutNav";

const index = () => {
  const stateUserIsLoading = useSelector((state) => state?.mapIsLoading);
  const stateClientAdresse = useSelector(
    (state) => state?.clientInformation?.adresse
  );

  const stateSlug = useSelector((state) => state?.user?.settings?.slug);
  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const currentSlug = pathSegments[1];
  useEffect(() => {
    setTimeout(() => {
      if (!stateClientAdresse && !stateSlug && currentSlug !== "[slug]") {
        router.push(`/${currentSlug}`);
      }
    }, 1000);
  }, [stateClientAdresse, stateSlug, currentSlug]);

  return (
    <>
      <HeaderWithoutNav />
      <EstimationLayout>
        <ContainerEstimationTwo>
          {stateUserIsLoading && (
            <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-10">
              <Loader />
            </div>
          )}
          <div className=" flex flex-col justify-between  w-full lg:w-4/12">
            <EtapeEstimationContainer />
            <div className="lg:block hidden">
              <p className="text-xs font-light text-gray-400 mt-5">
                *Le résultat de cette estimation ne saurait remplacer une
                évaluation concrète. Nos algorithmes sont en constante
                amélioration pour refléter au mieux la réalité.
              </p>
            </div>
          </div>
          <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" />
          {/* <div className="w-full h-0.5 bg-gray-100 lg:hidden flex mt-7 lg:mt-0" /> */}
          <EstimationManager />
        </ContainerEstimationTwo>
      </EstimationLayout>
    </>
  );
};

export default index;
