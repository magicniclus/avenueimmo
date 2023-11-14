import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { addNewContact } from "../../firebase/dataManager";

const index = () => {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    if (
      information.firstName !== "" &&
      information.lastName !== "" &&
      information.email !== "" &&
      information.phoneNumber !== ""
    ) {
      addNewContact(information);
    } else null;
  }, [information]);

  return (
    <>
      <Head>
        <title>
          Contact Avenue-Immo : Votre Partenaire Immobilier de Confiance
        </title>
        <meta
          name="description"
          content="Contactez Avenue-Immo pour des conseils experts en immobilier. Notre équipe est là pour répondre à toutes vos questions et vous aider dans vos projets immobiliers."
        />
        <meta
          name="keywords"
          content="contact immobilier, Avenue-Immo, assistance immobilière, services immobiliers, aide immobilière"
        />
        <meta
          property="og:title"
          content="Contact Avenue-Immo : Votre Partenaire Immobilier de Confiance"
        />
        <meta
          property="og:description"
          content="Besoin d'assistance dans votre projet immobilier ? Contactez Avenue-Immo dès aujourd'hui pour bénéficier de conseils d'experts et d'un accompagnement personnalisé."
        />
        <meta property="og:image" content="URL_DE_VOTRE_IMAGE_DE_CONTACT" />
        <meta property="og:url" content="https://www.avenue-immo.com/contact" />
        <link rel="canonical" href="https://www.avenue-immo.com/contact" />
      </Head>

      <main className="w-full flex justify-center items-center flex-col min-h-[calc(100vh-94px)]">
        <h1 className="text-2xl font-bold text-blue-500">Contactez-nous</h1>
        <form action="#" method="POST" className="mt-20">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={(e) =>
                      setInformation({
                        ...information,
                        firstName: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Prénom
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    onChange={(e) =>
                      setInformation({
                        ...information,
                        lastName: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setInformation({ ...information, email: e.target.value })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    onChange={(e) =>
                      setInformation({
                        ...information,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-iblue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default index;
