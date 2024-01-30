const BlogListFallback = ({ limit }: { limit: number }) => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";
  const blogCards = Array.from({ length: limit }, (_, index) => index + 1);
  return (
    <section className="px-6 pt-32 md:px-8 md:pt-40">
      <div className="max-w-7xl mx-auto gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogCards.map((i) => (
          <div
            key={i}
            className="max-w-7xl mx-auto flex flex-col rounded-xl p-6 gap-8 bg-secondary/50 animate-pulse w-full"
          >
            <div className={`${fallbackAnimate} w-full h-48 rounded-xl`} />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className={`${fallbackAnimate} w-2/3 h-4 rounded`} />
                <div className={`${fallbackAnimate} w-1/2 h-4 rounded`} />
              </div>

              <div className="flex gap-2 items-center">
                <div className={`${fallbackAnimate} rounded-full h-6 w-6`} />
                <div className={`${fallbackAnimate} w-1/4 h-3 rounded`} />
              </div>

              <div className={`${fallbackAnimate} w-1/4 h-3 rounded`} />

              <div className="flex gap-2 items-center text-silver-gray">
                <div className={`${fallbackAnimate} rounded-full h-6 w-6`} />
                <div className={`${fallbackAnimate} w-1/4 h-3 rounded`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogListFallback;
