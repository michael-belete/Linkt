import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  content: {
    image: {
      src: StaticImageData | string;
      alt: string;
    };
    title: string;
    body: string;
    leftAlign: boolean;
  };
}
const ApproachCard = ({
  content: { body, image, title, leftAlign },
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row overflow-x-hidden">
      <div className={`${leftAlign && "lg:order-last"}`}>
        <div
          data-aos={`${leftAlign ? "fade-left" : "fade-right"}`}
          className="flex justify-center items-center w-36 h-36 rounded-full shadow-card bg-secondary "
        >
          <Image src={image.src} alt={image.alt} />
        </div>
      </div>

      <div
        data-aos="fade-down"
        className="border border-silver-gray/60 w-0 h-48 lg:w-1/4 lg:h-0"
      ></div>

      <div
        className={`flex flex-col gap-4 text-center sm:w-1/2 lg:text-left lg:flex-row ${
          leftAlign && "lg:order-first"
        }`}
      >
        <div
          data-aos="fade-right"
          className="border-t-2 border-x-2 border-silver-gray/60 h-6 w-full lg:hidden"
        ></div>
        <div
          data-aos="fade-down"
          className={`${
            leftAlign ? "order-last border-r-2" : "border-l-2"
          } hidden border-y-2 border-silver-gray/60 w-1/4 lg:block`}
        ></div>

        <div
          data-aos={`${leftAlign ? "fade-right" : "fade-left"}`}
          className="space-y-3"
        >
          <h3 className="text-3xl sm:text-4xl">{title}</h3>
          <p className="text-silver-gray text-base sm:text-lg">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachCard;
