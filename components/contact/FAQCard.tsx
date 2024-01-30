"use client";
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { FaPlus } from "react-icons/fa6";
import parse from "html-react-parser";

const FAQCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-secondary border border-border-secondary rounded overflow-auto">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center p-6 cursor-pointer"
      >
        {" "}
        <p>{question}</p>
        <button>
          <FaPlus
            className={`w-6 h-6 text-primary duration-500 ${
              show ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <AnimateHeight duration={300} height={show ? "auto" : 0}>
        <div className="px-6 pb-6">{parse(answer)}</div>
      </AnimateHeight>
    </div>
  );
};

export default FAQCard;
