
export const Brand = () => {

    
  return (
    <section className="bg-white py-20 lg:py-[120px] space-y-2">
      <div className="flex items-center justify-center">
        <h3 className="font-bold text-1xl">As Seen on</h3>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center space-x-5 sm:space-y-5">
              <a
                href="javascript:void(0)"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img src="/fool.png" alt="image" className="h-10 w-full" />
              </a>
              <a
                href="javascript:void(0)"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img src="/bloomberg.png" alt="image" className="h-10 w-full" />
              </a>
              <a
                href="javascript:void(0)"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img src="/yahoo.png" alt="image" className="h-10 w-full" />
              </a>
              <a
                href="javascript:void(0)"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img src="nasdaq.png" alt="image" className="h-10 w-full" />
              </a>
              <a
                href="javascript:void(0)"
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
              >
                <img
                  src="cointelegraph.png"
                  alt="image"
                  className="h-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

