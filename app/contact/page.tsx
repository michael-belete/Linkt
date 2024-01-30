import ContactForm from "@/components/contact/ContactForm";
import FAQ from "@/components/contact/FAQ";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] pb-24">
      <ScrollAnimation>
        <section data-aos="fade-up" className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl space-y-24 px-6">
            <h1 className="text-center font-semibold text-4xl sm:text-5xl">
              Got any <span className="text-primary">questions</span>?
            </h1>
            <ContactForm />
          </div>
        </section>

        <section data-aos="fade-up" className="pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl space-y-24 px-6">
            <h2 className="text-center font-semibold text-4xl sm:text-5xl">
              FAQs
            </h2>

            <FAQ />
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default ContactPage;
