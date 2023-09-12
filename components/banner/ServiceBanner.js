import React, { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    src: "./houses/one.jpeg",
    alt: "banner",
    estimation: "620 000",
  },
  {
    id: 2,
    src: "./houses/two.jpeg",
    alt: "banner",
    estimation: "1 940 000",
  },
  {
    id: 3,
    src: "./houses/three.jpeg",
    alt: "banner",
    estimation: "220 000",
  },
  {
    id: 4,
    src: "./houses/five.jpeg",
    alt: "banner",
    estimation: "550 000",
  },
];

const ServiceBanner = () => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === images.length ? 1 : prevCurrent + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Nettoyez l'intervalle lors du démontage du composant
  }, []);
  return (
    <section className="w-full px-5 lg:flex lg:justify-between items-center lg:flex-row flex-col max-w-[1250px] mx-auto mt-20">
      <div className="relative w-full lg:w-5/12 h-auto">
        {images.map((image) => {
          if (image.id === current) {
            return (
              <div
                key={image.id}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                {image.estimation && (
                  <div className="absolute top-5 right-5 bg-blue-500 p-3 rounded-xl flex justify-center items-center ronded-lg">
                    <div className="text-white text-center">
                      <h1 className=" text-xs md:text-base font-light">
                        Bien estimé
                      </h1>
                      <p className="text-xl font-bold">{image.estimation}€</p>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
        <div className="absolute bottom-5 left-50% transform translateX(-50%) w-full flex items-center justify-center">
          {images.map((image, id) => {
            return (
              <div
                key={id}
                className={
                  "w-4 h-4 rounded-full " +
                  (image.id === current ? "bg-white" : "bg-white opacity-40") +
                  (id !== images.length - 1 ? " mr-2" : "")
                }
              />
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col justify-around lg:mt-0 mt-10">
        <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
          Les étapes d'une vente{" "}
          <span className="text-blue-500">immobiliere</span>:
        </h2>
        <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
          1. L'Estimation du Bien
        </h3>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          L'étape initiale de toute vente immobilière est l'estimation du bien.
          Une estimation précise garantit que le bien est proposé à un prix
          compétitif sur le marché, ni trop élevé pour dissuader les acheteurs
          potentiels, ni trop bas pour compromettre la valeur réelle du bien.
        </p>

        <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
          2. La Promotion et la Visite
        </h3>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          Une fois le bien estimé, il est mis en avant sur diverses plateformes
          pour attirer des acheteurs potentiels. Les visites sont organisées
          pour permettre aux acheteurs de voir le bien en personne, d'évaluer
          son état et de poser des questions pertinentes.
        </p>

        <h3 className="text-lg md:text-xl text-gray-700 md:w-10/12 mt-8">
          3. La Conclusion de la Vente
        </h3>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          Après les visites, les offres sont reçues et évaluées. Une fois qu'une
          offre est acceptée, les formalités juridiques et administratives sont
          entreprises pour finaliser la vente. L'importance d'une estimation
          précise se reflète ici, car elle assure une transaction fluide et
          satisfaisante pour toutes les parties impliquées.
        </p>
      </div>
    </section>
  );
};

export default ServiceBanner;
