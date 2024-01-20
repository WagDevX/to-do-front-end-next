export default function Loading() {

  const array = Array.from({ length: 6 })

  return (
    <div className="mt-10 grid gap-10 mb-20 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
        {array.map(() => {
          return (
            <div  className={`aspect-[6.5/7.3] flex-col rounded-3xl bg-white shadow-lg bg-zinc-300 animate-pulse`}>
          <div className={`flex justify-between border-white px-6 pb-2 pt-5`}>
            <h1 className="font-bold text-neutral-600"></h1>
            <button
             
            >
              
            </button>
          </div>
          <div className="flex h-full flex-col justify-between px-6 py-5">
            <p className="mb-4 overflow-auto whitespace-pre-line	text-xs text-neutral-600">
             
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="rounded-full p-1 transition-all duration-150 hover:bg-orange-400/50"
                >
                  
                </button>
                <button className="rounded-full p-1.5 transition-all duration-150 hover:bg-orange-400/50">
                  
                </button>
              </div>
              <button
             
              >
                
              </button>
            </div>
          </div>
        </div>
          )
        })}
      </div>  
  );
}
