import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <div className="lg:w-full sm:w-11/12 w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-16 flex items-center justify-between flex-col">
        <div className="w-full lg:w-full flex flex-col justify-around lg:mt-0 mt-10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Mentions Légales de{" "}
            <span className="text-blue-500">Avenue-Immo</span>
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            1. Informations légales
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Nom de la société : Nicolas Castera Téléphone : 0631420045 Adresse
            e-mail : casteranicolas.contact@gmail.com Société inscrite au RCS de
            Bordeaux
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            2. Hébergement
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Le site Avenue-Immo est hébergé par Neltify, dont le siège social
            est situé à 2325 3rd Street, Suite 215, San Francisco, California
            94107 aux Etats-Unis.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            3. Propriété intellectuelle
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            L'ensemble des contenus (textes, images, graphismes, logo, icônes,
            etc.) présents sur le site Avenue-Immo est protégé par les droits
            d'auteur et de propriété intellectuelle. Toute reproduction,
            modification, publication ou adaptation de tout ou partie des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est
            interdite sans l'autorisation écrite préalable de Avenue-Immo.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            4. Limitation de responsabilité
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Bien que nous nous efforçons d'assurer l'exactitude et la mise à
            jour des informations diffusées sur Avenue-Immo, nous ne saurions
            être tenus pour responsables de tout dommage direct ou indirect
            résultant de l'accès à notre site, ou de l'utilisation des
            informations qu'il contient.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            5. Liens externes
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Le site Avenue-Immo peut contenir des liens vers des sites tiers.
            Avenue-Immo n'a pas de contrôle sur ces sites et ne peut être tenu
            responsable de leur contenu ni de leur politique de confidentialité.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
