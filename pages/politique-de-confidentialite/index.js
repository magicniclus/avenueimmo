import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Confidentialite = () => {
  return (
    <>
      <Header />
      <div className="lg:w-full sm:w-11/12 w-full max-w-[1250px] px-5 py-10 lg:px-20 lg:py-16 flex items-center justify-between flex-col">
        <div className="w-full lg:w-full flex flex-col justify-around lg:mt-0 mt-10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Politique de Confidentialité d'
            <span className="text-blue-500">Avenue-Immo</span>
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            1. Collecte des Informations
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Lors de votre navigation sur Avenue-Immo, nous recueillons des
            données relatives à votre bien afin d'en estimer sa valeur. Ces
            informations incluent la localisation, la taille, le type de bien,
            et d'autres caractéristiques pertinentes. Par ailleurs, des données
            d'identification telles que votre nom, adresse e-mail et numéro de
            téléphone peuvent également être recueillies afin de vous offrir une
            expérience utilisateur optimale.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            2. Utilisation et Partage des Informations
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Vos données, notamment celles concernant votre bien immobilier, sont
            essentielles pour nous permettre d'effectuer une estimation. Elles
            peuvent également être utilisées pour vous présenter des offres ou
            services pertinents. Avenue-Immo peut choisir de revendre ces
            données à des agents ou agences immobilières pour vous proposer des
            services adaptés. Cependant, vous serez toujours informé et aurez la
            possibilité de refuser tout partage d'informations avec des tiers.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            3. Protection de vos données
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            La sécurité de vos données est primordiale pour nous. Avenue-Immo
            utilise des technologies et protocoles sécurisés pour s'assurer que
            vos informations sont bien protégées contre tout accès non autorisé,
            perte, altération ou divulgation. Des mesures telles que le cryptage
            des données et l'utilisation de pare-feux sont mises en place pour
            garantir la confidentialité de vos informations.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            4. Vos droits en matière de données
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Conformément à la réglementation en vigueur, vous disposez d'un
            droit d'accès, de rectification, de suppression et d'opposition à
            l'utilisation de vos données. Vous pouvez exercer ces droits à tout
            moment en nous contactant via les coordonnées fournies sur notre
            site. Si vous estimez que vos droits ne sont pas respectés, vous
            avez la possibilité de déposer une réclamation auprès de l'autorité
            de contrôle compétente.
          </p>
          <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
            5. Modifications de la politique de confidentialité
          </h3>
          <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
            Avenue-Immo se réserve le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications entreront en
            vigueur dès leur publication sur notre site. Nous vous encourageons
            donc à consulter régulièrement cette politique afin de rester
            informé de nos pratiques en matière de protection des données.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confidentialite;
