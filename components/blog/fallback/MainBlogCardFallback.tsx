import React from "react";

const MainBlogCardFallback = () => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";

  return (
    <div className="w-full block md:w-1/2">
      <div className="flex flex-col rounded-xl gap-8">
        {/* image */}
        <div className={`w-full rounded-xl h-52 sm:h-96 ${fallbackAnimate}`} />

        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex flex-col gap-2">
            <div className={`w-full h-3 rounded ${fallbackAnimate}`} />
            <div className={`w-1/2 h-3 rounded ${fallbackAnimate}`} />
          </div>

          <div className="flex gap-2 items-center">
            <div className={`rounded-full h-6 w-6 ${fallbackAnimate}`} />
            <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
          </div>

          {/* intro */}
          <div className="flex flex-col gap-2">
            <div className={`w-full h-3 rounded ${fallbackAnimate}`} />
            <div className={`w-1/2 h-3 rounded ${fallbackAnimate}`} />
            <div className={`w-1/2 h-3 rounded ${fallbackAnimate}`} />
          </div>

          <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />

          <div className={`w-12 h-3 rounded ${fallbackAnimate}`} />
        </div>
      </div>
    </div>
  );
};

export default MainBlogCardFallback;
