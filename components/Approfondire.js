import React from "react";
import {
  BookmarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

const Approfondire = () => {
  return (
    <section className=" lg:w-7/12 flex flex-col items-center min-w-[100%] mx-auto md:py-16 py-10  md:px-0 px-5">
      <h2 className="text-gray-700 text-2xl">
        Vous souhaitez approfondir votre estimation ?
      </h2>
      <h3 className="mt-5">
        Nous avons sélectionné pour vous le meilleur agent sur votre secteur
      </h3>
      <div className="w-[100%] bg-gray-50 md:bg-white md:shadow-md mt-10 md:py-16 py-10 px-5 lg:px-16 relative">
        <div className="absolute -top-5 right-10 z-20 w-32 h-32 overflow-hidden lg:block hidden">
          <BookmarkIcon className="h-42 w-32 text-yellow-500 shadow-xl" />
          <div className="flex flex-col absolute inset-0 items-center justify-center">
            <p className="text-white text-xs">Partenaire</p>
            <h3 className="text-white text-center">
              Avenue <br />
              Immo
            </h3>
          </div>
        </div>
        <div className="flex">
          <div className=" md:block hidden p-5 bg-gray-200 w-max rounded-full">
            <p className="text-4xl text-center text-gray-700">NC</p>
          </div>
          <div className="flex flex-col items-start ml-5">
            <p className="text-lg">Nicolas CASTERA</p>
            <p className="text-sm font-light">Conseiller Iad</p>
            <div className="flex justify-center items-center">
              <img
                src="/logos/logovalue.png"
                className="w-6 h-auto object-contain mt-1"
              />
              <div className="flex ml-1">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
                <StarIcon className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs w-9/12 mt-10">
          Agent immobilier expérimenté, spécialisé dans les secteurs de Bordeaux
          et du Bassin d'Arcachon. Fort d'une connaissance approfondie du marché
          local, je vous offre une estimation détaillée et une stratégie de
          commercialisation sur mesure pour valoriser votre bien. Ne laissez pas
          votre propriété entre les mains de n'importe qui. Contactez-moi pour
          un rendez-vous et découvrez la différence d'un service professionnel
          et personnalisé.
        </p>
        <div className="flex md:flex-row flex-col">
          <a
            href="tel:0631420045"
            className="text-white py-1.5 px-5 rounded-full transition ease-in-out duration-100 w-max bg-blue-500 flex mt-10 cursor-pointer hover:shadow-lg"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            0631420045
          </a>

          <a
            href="mailto:casteranicolas.contact@gmail.com?subject=Estimation de mon bien"
            className="text-white py-1.5 px-5 rounded-full transition ease-in-out duration-100 w-max bg-blue-500 flex md:ml-5 md:mt-10 mt-5 cursor-pointer hover:shadow-lg"
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Approfondire;
