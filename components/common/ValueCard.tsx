import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  content: {
    image: {
      src: StaticImageData | string;
      alt: string;
    };
    title: string;
    body: string;
  };
}

const ValueCard = ({ content: { body, image, title } }: Props) => {
  return (
    <div className="p-6 h-full max-w-sm w-full bg-secondary shadow-card rounded-2xl flex flex-col gap-4 items-center text-center md:p-8">
      <div className="w-12 h-12">
        <Image src={image.src} alt={image.alt} />
      </div>
      <div className="flex flex-col justify-between h-full gap-8">
        <h3 className="text-3xl sm:text-4xl">{title}</h3>

        <p className="text-silver-gray sm:text-lg">{body} </p>
      </div>
    </div>
  );
};

export default ValueCard;
