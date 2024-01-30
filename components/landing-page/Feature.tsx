import React from "react";
import FeatureCard from "./FeatureCard";
import { featureCardsData } from "@/data";

const Feature = () => {
  return (
    <section className="pt-24 md:pt-32">
      <div className="px-8 max-w-7xl mx-auto space-y-40">
        <h2
          data-aos="zoom-in"
          className="text-center font-semibold text-4xl sm:text-5xl"
        >
          Now, anything is <span className="text-primary">Possible</span>
        </h2>

        <div className="flex items-center justify-center flex-col lg:flex-row">
          <ul className="flex flex-col gap-64 xl:gap-32 xl:flex-row">
            {featureCardsData.map(({ body, image, title }, i) => (
              <li data-aos="fade-up" data-aos-delay={50 * i} key={title}>
                <FeatureCard body={body} image={image} title={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
