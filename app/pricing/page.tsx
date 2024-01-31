import PricingCard from "@/components/pricing/PricingCard";
import { RiTeamFill } from "react-icons/ri";
import { IoRocketSharp } from "react-icons/io5";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "AI-Team",
      icon: <RiTeamFill className="w-6 h-6" />,
      titleColor: "text-[#FA8072]",
      features: [
        "Dedicated Account Manager",
        "Team (AI, Full-Stack, Project Manager, & Design)",
        "Unlimited Iterations",
        "24/7 Text Support",
      ],
    },
    {
      name: "Enterprise",
      icon: <IoRocketSharp className="w-6 h-6" />,
      titleColor: "text-[#FFAE42]",
      features: [
        "AI Consulting",
        "Build Features to Optimize Business Operations or Enhance Customer Experience",
        "Implementation and Training",
        "Maintenance",
        "24/7 Text Support",
      ],
    },
  ];
  return (
    <main className="min-h-[calc(100vh-80px)] pb-24">
      <ScrollAnimation>
        <section className="pt-20 md:pt-24">
          <div className="mx-auto max-w-7xl space-y-32 px-6 md:px-8">
            <h1
              data-aos="fade-up"
              className="text-center font-semibold text-4xl sm:text-5xl"
            >
              Pricing <span className="text-primary">Plans</span>
            </h1>

            {/* pricing cards container */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col gap-8 justify-center items-center py-4 md:items-stretch md:flex-row"
            >
              {pricingPlans.map((pricingPlan, i) => (
                <PricingCard
                  key={`${i}_${pricingPlan.name}`}
                  pricingPlan={pricingPlan}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
}
