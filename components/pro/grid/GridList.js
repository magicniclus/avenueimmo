import React from "react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Réactivité garantie",
    text: "Recevez instantanément par email tous les prospects pour maximiser vos opportunités de conversion.",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Qualité certifiée",
    text: "Nous qualifions chaque prospect avec un processus rigoureux incluant une vérification téléphonique pour assurer leur pertinence.",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Partenaires 100% exclusifs",
    text: "Bénéficiez d'une exclusivité totale dans votre secteur. Chaque prospect vous est uniquement dédié, soulignant l'importance que nous accordons à la sélection de nos partenaires.",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Contact à prix coûtant et maîtrise totale du budget",
    text: "Accédez et gérez votre compte publicitaire en temps réel, ajustez vos dépenses selon vos besoins et payez uniquement le coût réel des prospects.",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GridList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <div className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </div>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{action.text}</p>
              </div>
              {/* <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridList;
