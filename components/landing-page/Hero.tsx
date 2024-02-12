import Wave from "./Wave";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] relative">
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24 md:pt-38">
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          className="font-semibold text-4xl xs:text-6xl md:text-7xl"
        >
          <span>Make AI your </span>
          <span className="text-primary">Superpower</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-silver-gray text-lg sm:text-xl lg:text-2xl"
        >
          Customize chatbots, computer vision, recommendation, and
          <br /> content to increase efficiency and generate new revenue streams{" "}
        </p>

        <div data-aos="fade-up" data-aos-duration="1200">
          <a
            className="btn-primary px-6 py-3"
            target="_blank"
            href="https://cal.com/reidmccrabb/meet-with-reid"
          >
            Book a meeting
          </a>
        </div>
      </div>

{/*       <div className="absolute z-0 h-[50%] w-full bottom-0 left-0 overflow-hidden">
        <Wave />
      </div> */}
    </section>
  );
}
