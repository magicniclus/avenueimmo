import React from "react";
import EstimationLayout from "../components/layout/EstimationLayout";
import Estimation from "../components/estimation/Estimation";
import Header from "../components/header/Header";
import Breadrumb from "../components/breadCrumb/BreadCrumb";
import EvaluationBanner from "../components/banner/EvaluationBanner";
import Faq from "../components/faqs/Faq";
import Footer from "../components/footer/Footer";
import ServiceBanner from "../components/banner/ServiceBanner";
import CTABanner from "../components/banner/CTABanner";
import Head from "next/head";

const Accueil = () => {
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
      <Header />
      <main className="w-full flex justify-center items-center flex-col">
        <EstimationLayout>
          <Estimation />
        </EstimationLayout>
        <Breadrumb list={["ACCUEIL", "ESTIMATION"]} />
        <EvaluationBanner />
        <ServiceBanner />
        <Faq />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
