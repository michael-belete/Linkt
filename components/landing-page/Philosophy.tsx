import React from "react";
import ValueCard from "../common/ValueCard";
import { valueCardsData } from "@/data";

const Philosophy = () => {
  return (
    <section className="pt-24 md:pt-32">
      <div className="px-8 max-w-7xl mx-auto space-y-24 ">
        <h2 className="text-center font-semibold text-4xl sm:text-5xl">
          Our <span className="text-primary">Philosophy</span>
        </h2>
        <ul className="flex h-full flex-col justify-center gap-16 items-center xl:items-stretch xl:flex-row">
          {valueCardsData.map((content, i) => (
            <li
              data-aos="flip-left"
              data-aos-delay={50 * i}
              key={content.title}
            >
              <ValueCard content={content} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Philosophy;
