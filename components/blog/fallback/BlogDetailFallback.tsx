const BlogDetailFallback = () => {
  const fallbackAnimate = "bg-gray-800 animate-pulse";
  const contentPlacholders = 4;

  return (
    <div>
      <section className="px-6 pt-20 md:px-8 md:pt-32">
        <div className="mx-auto max-w-5xl flex flex-col gap-12">
          <div className={`${fallbackAnimate} h-8 w-full rounded`} />

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div className={`${fallbackAnimate} rounded-full h-8 w-8`} />
              <div className={`${fallbackAnimate} h-3 w-40 rounded`} />
            </div>

            <div className={`${fallbackAnimate} h-3 w-32 rounded`} />

            <div className={`${fallbackAnimate} h-3 w-24 rounded`} />
          </div>

          <div className={`${fallbackAnimate} w-full h-80 rounded-xl`} />
        </div>
      </section>

      <section className="px-6 pt-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4">
            {Array.from(
              { length: contentPlacholders },
              (_, index) => index + 1
            ).map((index) => (
              <div
                key={index}
                className={`${fallbackAnimate} h-4 w-full rounded`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailFallback;
