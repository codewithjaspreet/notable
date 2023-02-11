import React from 'react'

export const NonKyc = () => {
  return (
    <div className="bg-purple-900 p-20 flex  ">
      <div className="space-y-5 w-full sm:w-2/3">
        <h1 className="text-4xl text-white font-bold">Non-KYC account card</h1>

        <div className="p-10 bg-blue-700 w-full sm:w-1/2 space-y-10 rounded-lg">
          <div className="flex items-center space-x-5">
            <img src="/tick-1.png" alt="" />
            <p className="text-white ">
              Instant liquidity through Visa, Mastercard, JCB and UnionPay cards
              at <span className="font-bold">+100M</span> merchants
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <img src="/tick-1.png" alt="" />
            <p className="text-white ">
              No-KYC cards with up to <span className="font-bold">€2.5K </span>
              spending limit / day at merchants
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/3">
        <img src="/test-1.png" alt="" />
        <img src="/test.png" alt="" />
      </div>
    </div>
  );
}
