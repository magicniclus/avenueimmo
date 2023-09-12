import React from "react";
import EstimationLayout from "../components/layout/EstimationLayout";
import Estimation from "../components/estimation/Estimation";
import Header from "../components/header/Header";
import Breadrumb from "../components/breadCrumb/BreadCrumb";
import EvaluationBanner from "../components/banner/EvaluationBanner";
import Faq from "../components/faqs/Faq";
import ImageBanner from "../components/banner/ImageBanner";
import Footer from "../components/footer/Footer";
import ServiceBanner from "../components/banner/ServiceBanner";
import CTABanner from "../components/banner/CTABanner";

const Accueil = () => {
  return (
    <>
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
        {/* <ImageBanner /> */}
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
