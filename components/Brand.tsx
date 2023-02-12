import React from "react";

export const Brand = () => {
  return (
    <div className="p-12">
      <div className="flex items-center justify-center ">
        <h3 className="font-bold ">As seen on</h3>
      </div>

      <div className="flex  justify-center items-center space-x-5">
        <div>
          <img src="/fool.png" alt="" />
        </div>
        <div>
          <img src="/nasdaq.png" alt="" />
        </div>
        <div>
          <img src="/bloomberg.png" alt="" />
        </div>
        <div>
          <img src="/yahoo.png" alt="" />
        </div>
        <div>
          <img src="/cointelegraph.png" alt="" />
        </div>
      </div>
    </div>
  );
};
