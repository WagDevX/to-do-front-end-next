export default function Loading() {
  const array = Array.from({ length: 6 });

  return (
    <div className="mb-20 mt-10 grid gap-10 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
      {array.map((item, index) => {
        return (
          <div
            key={index}
            className="aspect-[6.5/7.3] animate-pulse flex-col rounded-3xl  bg-zinc-300"
          >
            <div className={`flex justify-between border-white px-6 pb-2 pt-5`}>
              <div className="block h-7 w-64 rounded-3xl bg-white/50  font-bold text-neutral-600">
                {" "}
              </div>
              <div className="block size-7 rounded-3xl bg-white/50 font-bold text-neutral-600">
                {" "}
              </div>
            </div>
            <div className="flex h-full flex-col justify-between px-6 py-5">
              <div className="flex flex-col gap-4">
                <div className="block h-7 w-64 rounded-3xl bg-white/50  font-bold text-neutral-600">
                  {" "}
                </div>
                <div className="block h-7 w-52 rounded-3xl bg-white/50  font-bold text-neutral-600">
                  {" "}
                </div>
                <div className="block h-7  w-40 rounded-3xl bg-white/50  font-bold text-neutral-600">
                  {" "}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="block size-7 rounded-3xl bg-white/50 font-bold text-neutral-600">
                    {" "}
                  </div>
                  <div className="block size-7 rounded-3xl bg-white/50 font-bold text-neutral-600">
                    {" "}
                  </div>
                </div>
                <div className="block size-7 rounded-3xl bg-white/50 font-bold text-neutral-600">
                  {" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
