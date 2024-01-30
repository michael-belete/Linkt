import { StaticImageData } from "next/image";

export interface SolutionsHeroData {
  [key: string]: {
    title: string;
    description: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  };
}

export interface SolutionsFeaturesData {
  [key: string]: {
    title: string;
    content: string;
    icon: JSX.Element;
  };
}
