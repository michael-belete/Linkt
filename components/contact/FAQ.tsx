import React from "react";
import FAQCard from "./FAQCard";
import { faqData } from "@/data";

const FAQ = () => {
  return (
    <ul className="space-y-6 max-w-3xl mx-auto">
      {faqData.map(({ question, answer }, i) => (
        <li key={i}>
          <FAQCard question={question} answer={answer} />
        </li>
      ))}
    </ul>
  );
};

export default FAQ;
