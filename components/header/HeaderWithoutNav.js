import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const HeaderWithoutNav = () => {
  return (
    <header className="bg-white shadow-sm ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Avenue-immo</span>
            <img
              className="h-auto w-28"
              src="/logos/biglogoFive.png"
              alt="avenue-immo"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm leading-6 text-gray-700">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderWithoutNav;
