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
        <title>Devenez partenaire Avanue-immo - Avenue-Immo Partner</title>
        <meta
          name="description"
          content="Félicitations pour avoir franchi la première étape de votre candidature avec Avenue-Immo. Découvrez les prochaines étapes pour devenir notre partenaire exclusif dans votre secteur."
        />
        <meta
          name="keywords"
          content="résultat de candidature, partenariat Avenue-Immo, entretien partenariat, opportunités de partenariat, devenir partenaire"
        />
        <meta
          property="og:title"
          content="Résultat de Candidature - Avenue-Immo Partner"
        />
        <meta
          property="og:description"
          content="Félicitations ! Votre candidature a été reçue avec succès. Préparez-vous pour l'entretien personnalisé et saisissez l'occasion de devenir un partenaire exclusif d'Avenue-Immo."
        />
        <meta property="og:image" content="URL_DE_VOTRE_IMAGE_EN_ÉVIDENCE" />
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
