import React from "react";
import TabbedItems from "./TabbedItems";

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              <h2>
                Rechercher un praticien de la santé
              </h2>
              <p>
                Recherchez votre praticien et prenez rendez-vous en un clic
              </p>
            </div>
          </div>
        </div>
        <div>
          <TabbedItems/>
        </div>
      </div>
    </section>
  );
};

export default TabbedSection;
