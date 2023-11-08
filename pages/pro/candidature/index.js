import React, { useState, useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";

import ProgressBar from "../../../components/pro/ProgressBar";
import Start from "../../../components/pro/etapes/Sart";
import Status from "../../../components/pro/etapes/Status";
import Secteur from "../../../components/pro/etapes/Secteur";
import Experience from "../../../components/pro/etapes/Experience";
import Mandat from "../../../components/pro/etapes/Mandat";
import Objectifs from "../../../components/pro/etapes/Objectifs";
import Aquisition from "../../../components/pro/etapes/Aquisition";
import NomAgence from "../../../components/pro/etapes/NomAgence";
import Pourquoi from "../../../components/pro/etapes/Pourquoi";
import Contact from "../../../components/pro/etapes/Contact";
import { ca } from "@mapbox/mapbox-gl-geocoder/lib/exceptions";

const index = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [step, setStep] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const getStep = useSelector((state) => state.pro.stepInProgress);
  const totalStep = useSelector((state) => state.pro.totalStep);

  const status = useSelector((state) => state.pro.elements?.status);
  const secteur = useSelector((state) => state.pro.elements?.secteur);
  const experience = useSelector((state) => state.pro.elements?.experience);
  const nbrVente = useSelector((state) => state.pro.elements?.nbrVente);
  const objectifs = useSelector((state) => state.pro.elements?.objectifs);
  const pige = useSelector((state) => state.pro.elements?.pige);
  const porte = useSelector((state) => state.pro.elements?.porte);
  const lead = useSelector((state) => state.pro.elements?.lead);
  const bouche = useSelector((state) => state.pro.elements?.bouche);
  const promoteurs = useSelector((state) => state.pro.elements?.promoteurs);
  const nomAgence = useSelector((state) => state.pro.elements?.nomAgence);
  const candidature = useSelector((state) => state.pro.elements?.candidature);
  const lastName = useSelector(
    (state) => state.pro.elements?.informationsPersonnelles?.lastName
  );
  const firstName = useSelector(
    (state) => state.pro.elements?.informationsPersonnelles?.firstName
  );
  const email = useSelector(
    (state) => state.pro.elements?.informationsPersonnelles?.email
  );
  const phone = useSelector(
    (state) => state.pro.elements?.informationsPersonnelles?.phone
  );

  useEffect(() => {
    if (getStep) {
      setStep(getStep);
    }
  }, [getStep]);

  const handleSection = () => {
    switch (step) {
      case 0:
        return <Start />;

      case 1:
        return <Status />;

      case 2:
        return <Secteur />;

      case 3:
        return <Experience />;

      case 4:
        return <Mandat />;

      case 5:
        return <Objectifs />;

      case 6:
        return <Aquisition />;

      case 7:
        return <NomAgence />;

      case 8:
        return <Pourquoi />;

      case 9:
        return <Contact />;

      default:
        return <Start />;
    }
  };

  const handleDisabled = () => {
    switch (step) {
      case 0:
        return false;

      case 1:
        return status ? false : true;

      case 2:
        return secteur ? false : true;

      case 3:
        return experience ? false : true;

      case 4:
        return nbrVente ? false : true;

      case 5:
        return objectifs ? false : true;

      case 6:
        return pige || porte || lead || bouche || promoteurs ? false : true;

      case 7:
        return nomAgence ? false : true;

      case 8:
        return candidature ? false : true;

      case 9:
        return firstName && lastName && email && phone ? false : true;

      default:
        return true;
    }
  };

  const handleStep = () => {
    if (step < totalStep) {
      dispatch({ type: "UPDATE_PRO_STEP" });
    } else {
      // router.push(`/pro/candidature/resultat`);
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
      <main className="lg:w-full sm:w-11/12 w-full max-w-[550px] px-5 py-5 lg:px-20 flex items-center justify-center flex-col relative z-20 mx-auto">
        <ProgressBar />
        <section className="mt-5 max-w-[550px] w-full">
          {handleSection()}
        </section>
        <div className="mt-10">
          <button
            disabled={handleDisabled()}
            type="button"
            className={`text-white py-4 px-7 rounded-lg transition ease-in-out duration-100 w-max ${
              !handleDisabled() ? "bg-opacity-40" : "bg-opacity-100"
            }`}
            style={{
              backgroundColor: "#3b82f6",
              opacity: handleDisabled() ? 0.4 : 1,
            }}
            onClick={handleStep}
          >
            {step === totalStep
              ? "Resultat"
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
