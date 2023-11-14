import { useEffect, useState } from "react";
import { setNewsletter } from "../../firebase/dataManager";
import SelectWithIcon from "../estimation/component/SelectWithIcon";

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const navigation = {
  legal: [
    { name: "Conditions d'utilisation", href: "/conditions-d-utilisation" },
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
  ],
  partenaires: [
    { name: "Devenir partenaire", href: "/partner" },
    { name: "Nos partenaires", href: "/partner" },
  ],
  services: [
    { name: "Estimation en ligne", href: "/" },
    { name: "Vendre", href: "/" },
    { name: "Acheter", href: "/" },
    { name: "Louer", href: "/" },
    { name: "Investir", href: "/" },
  ],
  Utiles: [
    { name: "Espace presse", href: "/" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      setIsButtonActive(false);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setIsButtonActive(isValidEmail(currentEmail));
  };

  const handleNewsletterSubmission = async (e) => {
    e.preventDefault();
    if (isButtonActive) {
      try {
        await setNewsletter(email);
        setEmail("");
        setNotification({ type: "success", message: "Vous êtes inscrit!" });
      } catch (error) {
        setNotification({
          type: "error",
          message: "Il y a eu une erreur. Veuillez réessayer.",
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-4 md:gap-8 max-w-[85%]">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Partner
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.partenaires.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Utiles
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Utiles.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 max-w-[350px]">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Sousvrivez à notre New's Letter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Recevez les dernières informations sur nos services et nos offres.
            </p>
            <form
              className="mt-6 sm:flex sm:max-w-md"
              onSubmit={handleNewsletterSubmission}
            >
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Entrez votre email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  disabled={!isButtonActive}
                  className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
                    isButtonActive
                      ? "bg-blue-500 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-white"
                      : "bg-blue-500 opacity-60 cursor-not-allowed text-white"
                  }`}
                >
                  Envoyer
                </button>
              </div>
            </form>
            {notification && (
              <div
                className={`mt-4 text-sm ${
                  notification.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {notification.message}
              </div>
            )}
          </div>
        </div>
        <div className="py-10 flex md:flex-row flex-col justify-between">
          <a
            className="text-sm font-semibold leading-6 text-white"
            href="mailto:contact@avenue-immo.com"
          >
            contact@avenue-immo.com
          </a>
          <div className="flex flex-col">
            <label
              htmlFor="language"
              className="text-sm font-semibold leading-6 text-white"
            >
              Langue :
            </label>
            <select className="max-w-[150px] mt-3 border px-4 py-1 rounded-md font-light text-sm cursor-pointer text-gray-700">
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 Avenue-Immo, Inc. Tous droit réservé.
          </p>
        </div>
      </div>
    </footer>
  );
}
