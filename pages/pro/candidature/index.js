import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "../../../components/pro/ProgressBar";
import Start from "../../../components/pro/etapes/Sart";

const index = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const step = useSelector((state) => state.pro.stepInProgress);
  const totalStep = useSelector((state) => state.pro.totalStep);

  const handleSection = () => {
    switch (step) {
      case 0:
        return <Start />;

      default:
        return <Start />;
    }
  };
  const handleStep = () => {
    if (step < totalStep) {
      dispatch({ type: "UPDATE_PRO_STEP" });
    } else {
      router.push(`/pro/candidature/resultat`);
    }
  };
  return (
    <>
      <Head>
        <title>Avenue-Immo : Estimation Immobilière Gratuite en Ligne</title>
        <meta
          name="description"
          content="Découvrez la valeur de votre bien immobilier en quelques clics avec Avenue-Immo. Notre estimateur en ligne gratuit vous fournit une évaluation précise basée sur les dernières tendances du marché."
        />
        <meta
          name="keywords"
          content="estimation immobilière, estimation gratuite, estimateur en ligne, valeur immobilière, marché immobilier"
        />
        <meta
          property="og:title"
          content="Avenue-Immo : Estimation Immobilière Gratuite en Ligne"
        />
        <meta
          property="og:description"
          content="Découvrez la valeur de votre bien immobilier en quelques clics avec Avenue-Immo. Notre estimateur en ligne gratuit vous fournit une évaluation précise basée sur les dernières tendances du marché."
        />
        <meta property="og:image" content="URL_DE_VOTRE_IMAGE_EN_ÉVIDENCE" />
        <meta property="og:url" content="https://www.avenue-immo.com" />
        <link rel="canonical" href="https://www.avenue-immo.com" />
      </Head>
      <header className="lg:w-full sm:w-11/12 w-full max-w-[1250px] px-5 py-5 lg:px-20 flex items-center justify-center flex-col relative z-20 mx-auto">
        <div className="flex">
          <span className="sr-only">Avenue-immo</span>
          <img
            className="h-auto w-28"
            src="/logos/biglogoFive.png"
            alt="avenue-immo"
          />
        </div>
      </header>
      <main className="lg:w-full sm:w-11/12 w-full max-w-[1250px] px-5 py-5 lg:px-20 flex items-center justify-center flex-col relative z-20 mx-auto">
        <ProgressBar />
        <section className="mt-5 max-w-[500px]">{handleSection()}</section>
        <div className="mt-10">
          <button
            type="button"
            className={`text-white py-4 px-7 rounded-lg transition ease-in-out duration-100 w-max`}
            style={{
              backgroundColor: "#3b82f6",
            }}
            onClick={handleStep}
          >
            {step === 15
              ? "Voir l'estimation"
              : step === 0
              ? "Démarrer"
              : "Suivant"}
          </button>
        </div>
      </main>
    </>
  );
};

export default index;