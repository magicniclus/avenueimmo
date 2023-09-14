import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Conditions d'Utilisation de Avenue-Immo</title>
        <meta
          name="description"
          content="Découvrez les conditions d'utilisation d'Avenue-Immo. Ces termes décrivent vos droits et responsabilités en tant qu'utilisateur de notre plateforme."
        />
        <meta
          name="keywords"
          content="conditions d'utilisation Avenue-Immo, termes et conditions, droits de l'utilisateur, responsabilités"
        />
        <meta
          property="og:title"
          content="Conditions d'Utilisation de Avenue-Immo"
        />
        <meta
          property="og:description"
          content="Découvrez les conditions d'utilisation d'Avenue-Immo. Ces termes décrivent vos droits et responsabilités en tant qu'utilisateur de notre plateforme."
        />
        <meta
          property="og:image"
          content="URL_DE_VOTRE_IMAGE_REPRESENTANT_LES_CONDITIONS"
        />
        <meta
          property="og:url"
          content="https://www.avenue-immo.com/conditions-dutilisation"
        />
        <link
          rel="canonical"
          href="https://www.avenue-immo.com/conditions-dutilisation"
        />
      </Head>
      <Header />
      <div className="lg:w-full sm:w-11/12 w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-16 flex items-center justify-between flex-col">
        <div className="w-full lg:w-full flex flex-col justify-around lg:mt-0 mt-10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Conditions d'Utilisation de{" "}
            <span className="text-blue-500">Avenue-Immo</span>
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            1. Acceptation des conditions
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            En accédant au site Avenue-Immo, vous acceptez de respecter et
            d'être lié par les présentes conditions d'utilisation. Si vous
            n'êtes pas d'accord avec l'une des clauses énoncées ci-après,
            veuillez ne pas utiliser ce site.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            2. Utilisation du site
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Le site Avenue-Immo est destiné à fournir des estimations
            immobilières. Toute utilisation frauduleuse, malveillante ou non
            conforme à ces conditions est strictement interdite.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            3. Modification des conditions
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Avenue-Immo se réserve le droit de modifier, à tout moment, les
            présentes conditions d'utilisation. Les utilisateurs seront informés
            de toute modification par une mise à jour sur cette page.
            L'utilisation continue du site après une telle mise à jour constitue
            une acceptation des nouvelles conditions.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            4. Limitation de responsabilité
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Avenue-Immo fait de son mieux pour fournir des estimations précises
            et à jour. Cependant, ces estimations sont fournies "en l'état" et
            Avenue-Immo ne garantit pas leur exactitude ou leur pertinence pour
            des situations particulières. L'utilisateur utilise ces informations
            à ses propres risques.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            5. Droits de propriété intellectuelle
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Tous les contenus du site Avenue-Immo, y compris les textes, images,
            logos et autres, sont protégés par les lois sur les droits d'auteur
            et ne peuvent être reproduits ou utilisés sans le consentement
            explicite d'Avenue-Immo.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            6. Liens vers d'autres sites
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Avenue-Immo peut contenir des liens vers d'autres sites. Ces sites
            ne sont pas sous le contrôle d'Avenue-Immo et Avenue-Immo n'est pas
            responsable du contenu de ces sites. Ces liens sont fournis pour la
            commodité de l'utilisateur et ne constituent pas une approbation de
            ces sites par Avenue-Immo.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            7. Loi applicable et juridiction
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Ces conditions d'utilisation sont régies par la loi [nom du pays,
            par exemple "française"]. Tout litige découlant de ou en relation
            avec ces conditions sera soumis à la juridiction exclusive des
            tribunaux de [nom de la ville, par exemple "Paris"].
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
