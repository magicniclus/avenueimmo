import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    id: 1,
    question:
      "Quels sont les bénéfices d'être le partenaire unique d'Avenue-Immo dans mon secteur ?",
    answer:
      "En tant que partenaire unique dans votre secteur, vous bénéficiez d'une exclusivité totale, ce qui maximise votre visibilité et vos opportunités de capter des clients potentiels sans concurrence directe sur votre zone géographique.",
  },
  {
    id: 2,
    question:
      "Comment fonctionne le modèle d'abonnement pour les partenaires ?",
    answer:
      "Les partenaires payent un abonnement fixe pour accéder à notre plateforme. Cet abonnement couvre l'utilisation de notre site performant et l'accès à une génération illimitée de prospects, sans frais additionnels.",
  },
  {
    id: 3,
    question:
      "Avenue-Immo prend-il une marge sur les prospects générés par les partenaires ?",
    answer:
      "Non, Avenue-Immo ne prend aucune marge sur les prospects. Tout ce que vous générez via notre plateforme est à vous, sans frais supplémentaires.",
  },
  {
    id: 4,
    question:
      "Comment le site d'Avenue-Immo aide-t-il à générer des prospects ?",
    answer:
      "Notre site est optimisé pour une performance maximale, avec des outils avancés de génération de leads et une interface utilisateur intuitive, permettant aux partenaires de générer un nombre illimité de prospects.",
  },
  {
    id: 5,
    question:
      "Y a-t-il une limite au nombre de prospects qu'un partenaire peut générer ?",
    answer:
      "Non, il n'y a pas de limite. Nos partenaires peuvent générer autant de prospects qu'ils le souhaitent, maximisant ainsi leur potentiel de croissance.",
  },
  {
    id: 6,
    question:
      "Comment puis-je devenir partenaire exclusif d'Avenue-Immo dans ma région ?",
    answer:
      "Pour devenir partenaire exclusif, soumettez votre candidature via notre site. Nous évaluons chaque candidature pour assurer une adéquation parfaite avec notre philosophie et nos standards de qualité.",
  },
  {
    id: 7,
    question: "Quel soutien Avenue-Immo offre-t-il à ses partenaires ?",
    answer:
      "Nous offrons un soutien complet, incluant une formation initiale, un support technique continu, et des outils marketing pour vous aider à optimiser votre utilisation de la plateforme et à maximiser votre génération de leads.",
  },
  {
    id: 8,
    question:
      "Existe-t-il des critères spécifiques pour être accepté en tant que partenaire ?",
    answer:
      "Oui, nous recherchons des partenaires qui ont une solide connaissance de leur marché local, un engagement envers un service client de qualité, et la capacité de pleinement exploiter les outils et ressources que nous offrons.",
  },
  {
    id: 9,
    question:
      "Comment Avenue-Immo assure-t-il la qualité et la pertinence des prospects ?",
    answer:
      "Nous utilisons des algorithmes avancés pour cibler des prospects qualifiés et pertinents, assurant ainsi que les leads générés sont de haute qualité et en adéquation avec les services offerts par nos partenaires.",
  },
  {
    id: 10,
    question:
      "Quels avantages ai-je à choisir Avenue-Immo plutôt qu'une autre plateforme ?",
    answer:
      "Avenue-Immo se distingue par son modèle de partenariat exclusif, sa politique de non-marge sur les leads, son site hautement performant, et son engagement envers la réussite et la croissance de ses partenaires.",
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
