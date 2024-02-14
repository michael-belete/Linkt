import { solutionsHeroData } from "@/data";
import parse from "html-react-parser";
import Image from "next/image";

export default function Hero({ solution }: { solution: string }) {
  return (
    <section className="pt-24 md:pt-32">
      {solutionsHeroData.hasOwnProperty(solution) && (
        <div className="mx-auto max-w-7xl flex flex-col gap-24 px-4">
          <div className="flex flex-col gap-10">
            <h1 className="text-center font-semibold text-4xl sm:text-5xl md:text-7xl">
              {parse(solutionsHeroData[solution].title)}
            </h1>
            <p className="text-center text-silver-gray max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
              {parse(solutionsHeroData[solution].description)}
            </p>
            <div className="flex justify-center">
              <a
                className="btn-primary px-6 py-3"
                target="_blank"
                href="https://cal.com/reidmccrabb/meet-with-reid"
              >
                Book a meeting
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="object-cover w-full h-auto"
              src={solutionsHeroData[solution].image.src}
              alt={solutionsHeroData[solution].image.alt}
              width={1200}
              height={675}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
