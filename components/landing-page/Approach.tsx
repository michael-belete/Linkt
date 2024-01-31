import { approachData } from "@/data";
import React from "react";
import ApproachCard from "./ApproachCard";

const Approach = () => {
  return (
    <section className="relative bg-dots py-16 px-8 md:py-32">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="space-y-8 text-center lg:w-1/2 lg:text-left">
          <h2
            data-aos="fade-right"
            className="font-semibold text-4xl sm:text-5xl"
          >
            Our <span className="text-primary">Approach</span>
          </h2>
          <p data-aos="fade-right" className="text-2xl sm:text-3xl">
            How does Linkt tackle problems and provide solutions for
            clients?
          </p>
        </div>

        <ul className="space-y-32">
          {approachData.map((data) => (
            <li key={data.title}>
              <ApproachCard content={data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Approach;
