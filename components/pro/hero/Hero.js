import React from "react";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-500/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Devenez partenaire exclusif{" "}
            <span className="text-blue-500">Avenue-Immo</span>
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">
              Rejoignez Avenue-Immo et découvrez une nouvelle dimension dans
              votre carrière immobilière. En tant que partenaire exclusif dans
              votre secteur, vous aurez l'opportunité unique de façonner
              l'avenir de l'immobilier local avec nous. Ensemble, explorons les
              possibilités.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/partner/candidature"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Devenez partenaire
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agent immobilier professionnel"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default Hero;
