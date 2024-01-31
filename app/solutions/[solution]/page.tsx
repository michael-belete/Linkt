import CTA from "@/components/common/CTA";
import Hero from "@/components/solutions/Hero";
import { Metadata } from "next";
import { solutionsFeaturesData, solutionsHeroData } from "@/data";
import { stripHtml } from "@/utils";

type Props = {
  params: { solution: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const { solution } = params;
  const prefix = solution
    .replace("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  let title = `${prefix}: ${stripHtml(solutionsHeroData[solution].title)}`;
  let description = stripHtml(solutionsHeroData[solution].description);

  return {
    title,
    alternates: {
      canonical: `/solutions/${solution}`,
    },
    description,

    openGraph: {
      title,
      description,
    },

    twitter: {
      title,
      description,
    },
  };
}

export default function SolutionsPage({ params }: Props) {
  const { solution } = params;

  return (
    <main className="min-h-[calc(100vh-80px)]">
      <Hero solution={solution} />

      <section className="pt-24 md:pt-32">
        <div className="mx-auto max-w-7xl space-y-24 px-4">
          <h2 className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl">
            Business <span className="text-primary">Benefits</span>
          </h2>
          <ul className="grid place-content-stretch place-items-stretch gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {solutionsFeaturesData.map(
              (feature) =>
                feature.hasOwnProperty(solution) && (
                  <li key={feature[solution].title}>
                    <div className="flex flex-col h-full gap-8 p-8 rounded-xl border border-primary">
                      <div className="p-2 border border-primary w-fit h-fit rounded-lg flex justify-center items-center">
                        {feature[solution].icon}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg">
                        {feature[solution].title}
                      </h3>
                      <p className="text-silver-gray">
                        {feature[solution].content}
                      </p>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </section>

      <CTA />
    </main>
  );
}
