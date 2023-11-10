import React from "react";
import Head from "next/head";

const index = () => {
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
      <main className="lg:w-full sm:w-11/12 w-full max-w-[550px] px-5 py-5 lg:px-20 flex items-center justify-center flex-col relative z-20 mx-auto"></main>
    </>
  );
};

export default index;
