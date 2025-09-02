import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const statsOverview = () => {
  return (
    <>
      <div className="flex bg-white p-8 rounded-3xl gap-21.5">
        <div className="flex items-center gap-4">
          <div className="bg-[#D3FFE7] rounded-full w-20 h-20 flex items-center justify-center">
            <Image
              src="/assets/icons/money-receive.png"
              width={40}
              height={40}
              alt="Earning"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">Earning</p>
            <p className="text-3xl font-semibold">$198k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowUp className="text-[#00AC4F]" width={15} height={15} />
              <p className="text-xs text-[#00AC4F]">37.8%</p>
              <p className="text-xs">this month</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/objects/verticalLine.png"
            width={1}
            height={1}
            alt="Balance"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#CAF1FF] rounded-full w-20 h-20 flex items-center justify-center">
            <Image
              src="/assets/icons/wallet-money.png"
              width={40}
              height={40}
              alt="Balance"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">Balance</p>
            <p className="text-3xl font-semibold">$2.4k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowDown className="text-[#D0004B]" width={15} height={15} />
              <p className="text-xs text-[#D0004B]">2%</p>
              <p className="text-xs">this month</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/objects/verticalLine.png"
            width={1}
            height={1}
            alt="Balance"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#FFA3CF] rounded-full w-20 h-20 flex items-center justify-center">
            <Image
              src="/assets/icons/bag-2.png"
              width={40}
              height={40}
              alt="Total Sales"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-400">Total Sales</p>
            <p className="text-3xl font-semibold">$89k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowUp className="text-[#00AC4F]" width={15} height={15} />
              <p className="text-xs text-[#00AC4F]">11%</p>
              <p className="text-xs">this week</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default statsOverview
