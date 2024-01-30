import React from "react";

const CTA = () => {
  return (
    <section className="mt-44">
      <div className="relative backdrop-blur-md pb-24 max-w-7xl mx-auto text-center space-y-8 px-4">
        {/* backlight */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="absolute -z-50 bg-white top-full left-1/2 shadow-[0px_0px_300px_100px] shadow-primary"
        ></div>
        <h2 data-aos="fade-up" className="font-semibold text-4xl sm:text-5xl">
          Unlock the <span className="text-primary">Future</span>
        </h2>
        <p data-aos="fade-up" className="text-silver-gray sm:text-lg">
          Schedule a call with our team today and take your first step into the
          future of technology.
        </p>

        <div data-aos="fade-up" className="flex justify-center">
          <a
            className="btn-primary px-6 py-3"
            target="_blank"
            href="https://cal.com/reidmccrabb/meet-with-reid"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
