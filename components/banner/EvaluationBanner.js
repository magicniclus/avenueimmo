import {
  ChatBubbleBottomCenterTextIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const EvaluationBanner = () => {
  return (
    <section className="w-full px-5 lg:flex lg:justify-between items-center  max-w-[1250px] mx-auto">
      <div className=" lg:w-7/12">
        <h1 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
          Comment évaluer{" "}
          <span className="text-blue-500">gratuitement son bien immoblier</span>{" "}
          ?{" "}
        </h1>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          La localisation joue un rôle primordial dans l&apos;évaluation de la
          valeur d&apos;un bien immobilier. Que ce soit dans une rue paisible à
          l&apos;extérieur du centre-ville, en campagne ou dans un endroit animé
          avec plus de passage, la localisation peut fortement influencer le
          prix.
          <br />
          <br /> C&apos;est pourquoi nous recommandons à tout propriétaire ayant
          l&apos;intention de vendre de prendre rendez-vous avec l&apos;un de
          nos conseillers immobiliers spécialisés pour évaluer, affiner et
          conseiller sur leur projet de vente afin d&apos;obtenir les
          estimations les plus précises possible.
        </p>
      </div>
      <div className="lg:w-4/12 min-h-full rounded-lg bg-blue-500 py-5 lg:py-5 px-12 flex justify-around flex-col my-4 lg:my-0">
        <h3 className="text-white text-xl md:text-2xl font-normal lg:mb-0 flex items-center">
          <ChatBubbleBottomCenterTextIcon className="h-auto w-7 lg:mb-0 mr-2 text-yellow-500" />
          Notre conseil :
        </h3>
        <p className="text-white text-xs md:text-base font-light w-6/6 mt-5">
          La sur-évaluation du bien immobilier peut être un piège courant pour
          de nombreux propriétaires. C'est pourquoi il est crucial de s'informer
          sur la valeur actuelle du marché et son évolution, ainsi que de faire
          appel à des professionnels qualifiés pour une estimation précise.
          Évitez les erreurs coûteuses et obtenez une valeur juste en utilisant
          notre outil d'estimation gratuit et fiable, basé sur des données
          officielles en temps réel.
        </p>
      </div>
    </section>
  );
};

export default EvaluationBanner;
