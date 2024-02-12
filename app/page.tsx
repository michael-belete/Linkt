import CTA from "@/components/common/CTA";
import Feature from "@/components/landing-page/Feature";
import Hero from "@/components/landing-page/Hero";
import Philosophy from "@/components/landing-page/Philosophy";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Approach from "@/components/landing-page/Approach";
import Mission from "@/components/landing-page/Mission";

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-80px)]">

          <Hero />
          <div className="absolute top-0 left-0 w-full h-full bg-dots -z-50" />
        </div>

        <Feature />

        <Mission />

        <Approach />

        <Philosophy />

        <CTA />
    </main>
  );
}
