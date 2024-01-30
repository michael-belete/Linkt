import React from "react";
import BuildCard from "./BuildCard";
import { buildData } from "@/data";

const Build = () => {
  return (
    <section className="pt-44 md:pt-80">
      <div className="px-8 max-w-7xl mx-auto space-y-32">
        <div
          data-aos="fade-right"
          className="space-y-8 pb-4 border-b-2 border-[#5B5B5B]"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl">
            Building with <span className="text-primary">Linkt</span>
          </h2>
          <p className="text-silver-gray sm:text-xl">
            Implementing with Linkt couldn&apos;t be easier.
          </p>
        </div>

        <ul className="space-y-44">
          {buildData.map(({ body, title }, index) => (
            <li data-aos="fade-up" key={title}>
              <BuildCard body={body} index={index} title={title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Build;
