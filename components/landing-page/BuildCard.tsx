import React from "react";

interface Props {
  title: string;
  body: string;
  index: number;
}

const BuildCard = ({ title, body, index }: Props) => {
  return (
    <div className="flex flex-col gap-8 items-center text-center sm:text-left sm:flex-row">
      <div className="bg-secondary py-8 px-10 shadow-card rounded-xl">
        <p className="text-primary text-5xl md:text-6xl">{index + 1}</p>
      </div>

      <div className="space-y-4">
        <p className="text-2xl md:text-3xl">{title}</p>
        <p className="text-silver-gray sm:text-lg">{body}</p>
      </div>
    </div>
  );
};

export default BuildCard;
