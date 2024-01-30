import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  body: string;
}

const FeatureCard = ({ body, image, title }: Props) => {
  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden p-[2px] w-64 h-64 sm:w-80 sm:h-80 2xl:w-80 2xl:h-80 before:absolute before:-top-1/4 before:-left-1/4 before:w-[150%] before:h-[150%] before:bg-border-gradient before:animate-border">
        <div className="relative shadow-card h-full w-full flex justify-center items-start bg-secondary rounded-2xl z-10">
          <Image
            className="mt-8 w-44 h-44 sm:mt-12 sm:w-auto sm:h-auto"
            src={image.src}
            alt={image.alt}
          />
          <div className="absolute h-full w-full bg-card-fade z-50"></div>
        </div>
      </div>
      <div className="absolute z-50 -bottom-28 h-44 flex flex-col gap-6 text-center bg-body">
        <h3 className="font-light text-2xl sm:text-3xl">{title}</h3>

        <p className="text-silver-gray sm:text-lg">{body}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
