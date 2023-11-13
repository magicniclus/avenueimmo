import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    id: 1,
    question: "Pourquoi est-il important d'estimer son bien immobilier ?",
    answer:
      "L'estimation immobilière permet de déterminer la valeur réelle de votre bien sur le marché actuel. Cela vous aide à fixer un prix de vente ou de location adapté, évitant ainsi une sous-évaluation ou une surévaluation qui pourrait dissuader les potentiels acheteurs ou locataires.",
  },
  {
    id: 2,
    question: "Comment avenue-immo assure-t-il une estimation précise ?",
    answer:
      "Avenue-immo utilise des données récoltées en temps réel et des algorithmes avancés pour fournir une estimation aussi précise que possible. Nous analysons les transactions récentes, les tendances du marché et d'autres facteurs pertinents pour votre bien.",
  },
  {
    id: 3,
    question:
      "Pourquoi compléter une estimation en ligne par une estimation physique ?",
    answer:
      "L'estimation en ligne offre une première approximation basée sur des données générales. Une estimation physique permet d'appréhender les spécificités de votre bien, comme son état, ses aménagements ou sa localisation exacte, garantissant ainsi une évaluation plus précise et personnalisée.",
  },
  {
    id: 4,
    question: "Comment les données sont-elles récoltées en temps réel ?",
    answer:
      "Nous utilisons des technologies avancées et des partenariats avec diverses bases de données immobilières pour obtenir des informations actualisées sur les transactions, les offres et les demandes dans différentes régions.",
  },
  {
    id: 5,
    question:
      "Mes données personnelles sont-elles en sécurité avec avenue-immo ?",
    answer:
      "Absolument. La protection de vos données est notre priorité. Nous utilisons des protocoles de sécurité avancés pour garantir la confidentialité et la sécurité de vos informations. Elles ne sont jamais partagées sans votre consentement explicite.",
  },
  {
    id: 6,
    question:
      "Combien de temps prend une estimation en ligne sur avenue-immo ?",
    answer:
      "L'estimation en ligne est conçue pour être rapide et efficace. En général, cela ne prend que quelques minutes pour obtenir une première approximation de la valeur de votre bien.",
  },
  {
    id: 7,
    question:
      "Quelle est la différence entre une estimation en ligne et une évaluation professionnelle ?",
    answer:
      "L'estimation en ligne est basée sur des données générales et offre une première idée de la valeur. Une évaluation professionnelle, en revanche, est réalisée par un expert qui visite le bien, analyse ses caractéristiques uniques et fournit une évaluation plus détaillée et précise.",
  },
  {
    id: 8,
    question: "L'estimation en ligne est-elle gratuite ?",
    answer:
      "Oui, l'estimation en ligne sur avenue-immo est totalement gratuite. Elle vise à offrir aux propriétaires une première idée de la valeur de leur bien.",
  },
  {
    id: 9,
    question:
      "Puis-je faire confiance à l'estimation fournie par avenue-immo ?",
    answer:
      "Oui, nos estimations sont basées sur des données fiables et des algorithmes avancés. Cependant, pour une évaluation la plus précise possible, nous recommandons toujours de compléter l'estimation en ligne par une évaluation professionnelle sur place.",
  },
  {
    id: 10,
    question:
      "Comment avenue-immo se distingue-t-il des autres sites d'estimation ?",
    answer:
      "Avenue-immo se concentre sur la précision, l'actualité des données et la facilité d'utilisation. Notre plateforme est conçue pour offrir aux utilisateurs une expérience fluide tout en garantissant des estimations fiables basées sur des données récentes et pertinentes.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-[1250px] px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-[1250px]  divide-y divide-gray-700/10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Questions fréquentes :
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                        <span className="text-base leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-xs leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
