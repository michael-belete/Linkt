const BlogListFallback = ({ limit }: { limit: number }) => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";
  const blogCards = Array.from({ length: limit }, (_, index) => index + 1);
  return (
    <div className="flex flex-col gap-6 w-full md:w-1/2">
      {blogCards.map((i) => (
        <div key={i} className="w-full">
          <div className="flex gap-6">
            <div
              className={`rounded-xl shrink-0 h-32 w-36 md:w-full md:max-w-56 ${fallbackAnimate}`}
            />

            <div className="flex flex-col gap-2 w-full md:gap-4">
              <div className="flex flex-col gap-2">
                <div className={`w-full h-3 rounded ${fallbackAnimate}`} />
                <div className={`w-1/2 h-3 rounded ${fallbackAnimate}`} />
              </div>

              <div className="flex gap-2 items-center">
                <div className={`rounded-full h-6 w-6 ${fallbackAnimate}`} />
                <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />
              </div>

              <div className={`w-24 h-3 rounded ${fallbackAnimate}`} />

              <div className={`w-12 h-3 rounded ${fallbackAnimate}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListFallback;
