import { IoList } from "react-icons/io5";

const BlogDetailFallback = () => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";

  return (
    <div className="flex flex-col gap-24 mx-auto max-w-7xl px-4 md:px-6 md:flex-row">
      <div className="w-full flex flex-col gap-24">
        <div>
          <div className="flex flex-col gap-8 pb-8 border-b border-b-zinc-900 md:border-none md:pb-0">
            <div className="flex flex-col gap-4">
              <div
                className={`md:w-2/3 w-full h-4 rounded ${fallbackAnimate}`}
              />
              <div
                className={`md:w-1/2 w-2/3 h-4 rounded ${fallbackAnimate}`}
              />
            </div>

            <div className="flex flex-col gap-8 xs:items-center xs:flex-row">
              <div className="flex gap-2 items-center">
                <div className={`rounded-full h-6 w-6 ${fallbackAnimate}`} />
                <div className={`w-16 h-3 rounded ${fallbackAnimate}`} />
              </div>

              <div className={`w-16 h-3 rounded ${fallbackAnimate}`} />

              <div className={`w-16 h-3 rounded ${fallbackAnimate}`} />
            </div>

            <div
              className={`w-full rounded-xl h-52 sm:h-[400px] ${fallbackAnimate}`}
            />
          </div>

          <div className="flex-col gap-4 shrink-0 flex pt-8 md:hidden">
            <div className="flex gap-2 items-center">
              <IoList className="w-6 h-6" />
              <p>On this page</p>
            </div>
            <div className="space-y-3">
              <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
              <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
              <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`w-full h-3 rounded ${fallbackAnimate}`} />
          <div className={`w-2/3 h-3 rounded ${fallbackAnimate}`} />
          <div className={`w-1/2 h-3 rounded ${fallbackAnimate}`} />
        </div>
      </div>

      <div className="flex-col gap-4 shrink-0 hidden md:flex">
        <div className="flex gap-2 items-center">
          <IoList className="w-6 h-6" />
          <p>On this page</p>
        </div>
        <div className="space-y-3">
          <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
          <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
          <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailFallback;
