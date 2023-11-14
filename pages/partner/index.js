import React from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/pro/hero/Hero";
import Stats from "../../components/pro/stats/Stats";
import GridList from "../../components/pro/grid/GridList";
import Faq from "../../components/faqs/Faq";
import CTABanner from "../../components/banner/CTABanner";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Partenariat Avenue-Immo : Rejoignez Notre Réseau d'Experts Immobiliers
        </title>
        <meta
          name="description"
          content="Devenez partenaire d'Avenue-Immo et intégrez un réseau d'experts en immobilier. Découvrez les avantages exclusifs et les opportunités de croissance professionnelle."
        />
        <meta
          name="keywords"
          content="partenariat immobilier, réseau d'experts immobiliers, opportunités professionnelles immobilier, Avenue-Immo partenaires, collaboration immobilière"
        />
        <meta
          property="og:title"
          content="Partenariat Avenue-Immo : Élargissez Votre Horizon Professionnel"
        />
        <meta
          property="og:description"
          content="Rejoignez le réseau de partenaires d'Avenue-Immo et bénéficiez d'une collaboration enrichissante. Ensemble, transformons le marché immobilier."
        />
        <meta
          property="og:image"
          content="URL_DE_VOTRE_IMAGE_POUR_PARTENARIAT"
        />
        <meta
          property="og:url"
          content="https://www.avenue-immo.com/partner/"
        />
        <link rel="canonical" href="https://www.avenue-immo.com/partner/" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Stats />
        <GridList />
        <Faq />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default index;
