import React from "react";
import Head from "next/head";
import Script from "next/script";

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
      <main className="lg:w-full sm:w-11/12 w-full px-5 py-5 lg:px-20 flex items-center justify-center flex-col relative z-20 mx-auto">
        <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700 max-w-[550px]">
          🌟 Félicitations ! 🌟
        </h1>
        <p className="text-center mt-5 max-w-[550px]">
          Votre candidature a été reçue avec succès et nous sommes heureux de
          vous informer qu'elle répond parfaitement à nos critères de sélection.
        </p>
        <p className="text-center mt-5 max-w-[550px]">
          L'étape suivante est cruciale : nous vous proposons de finaliser votre
          candidature par un entretien personnalisé. Ce sera l'occasion de
          valider votre secteur et d'explorer ensemble les opportunités d'une
          collaboration fructueuse.
        </p>
        <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/avenue-immo/30min"
          style={{
            width: "100%",
            height: "800px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#C2C2C2",
            overflow: "hidden",
          }}
        ></div>
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </main>
    </>
  );
};

export default index;
