import { ReactNode } from "react";
import { MdCheck } from "react-icons/md";

export default function PricingCard({
  pricingPlan,
}: {
  pricingPlan: {
    name: string;
    icon: ReactNode;
    titleColor: string;
    features: string[];
  };
}) {
  return (
    <div className="relative flex w-full max-w-md flex-col gap-8 rounded-3xl bg-secondary text-left p-8 shadow-card duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2">
      <div className={`flex items-center gap-2 ${pricingPlan.titleColor}`}>
        {pricingPlan.icon}
        <h2 className="font-bold md:text-lg">{pricingPlan.name}</h2>
      </div>
      <div className="space-y-4">
        <p className="font-semibold">What&apos;s included</p>

        <ul className="flex flex-col gap-4">
          {pricingPlan.features.map((feature, i) => (
            <li className="flex gap-1.5 items-center" key={`feature_${i}`}>
              <div className="block p-1 rounded bg-primary/30">
                <MdCheck className="w-4 h-4 text-primary" />
              </div>
              <p className="font-light text-sm">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex justify-center">
        <a
          className="btn-primary w-fit px-4 py-2 sm:px-6 sm:py-3"
          target="_blank"
          href="https://cal.com/reidmccrabb/meet-with-reid"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
