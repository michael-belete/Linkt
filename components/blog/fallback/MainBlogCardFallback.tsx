import React from "react";

const MainBlogCardFallback = () => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";

  return (
    <section className="px-6 pt-20 md:px-8 md:pt-40">
      <div className="max-w-7xl mx-auto flex flex-col rounded-xl p-6 gap-10 bg-secondary/50 animate-pulse sm:p-8 sm:flex-row">
        <div
          className={`${fallbackAnimate} w-full h-52 rounded-xl sm:w-[45%] sm:h-96`}
        />
        <div className="flex flex-col gap-8 w-full sm:w-1/2">
          <div className={`${fallbackAnimate} w-full h-4 rounded`} />

          <div className="flex gap-2 items-center w-full">
            <div className={`${fallbackAnimate} rounded-full h-6 w-6`} />
            <div className={`${fallbackAnimate} h-3 w-24 rounded`} />
          </div>

          <div className={`${fallbackAnimate} w-1/4 h-3 rounded`} />

          <div className="flex flex-col gap-4 w-full">
            <div className={`${fallbackAnimate} w-full h-4 rounded`} />
            <div className={`${fallbackAnimate} w-2/3 h-4 rounded`} />
          </div>

          <div className="flex gap-2 items-center text-silver-gray">
            <div className={`${fallbackAnimate} rounded-full h-6 w-6`} />
            <div className={`${fallbackAnimate} w-1/4 h-3 rounded`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBlogCardFallback;
