import { ArrowUp } from 'lucide-react';
import React from 'react'

const statsOverview = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#D3FFE7] rounded-full w-18 h-18"></div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Earning</p>
            <p className="text-3xl font-semibold">$198k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowUp className="text-green-500" width={15} height={15} />
              <p className="text-xs text-green-500">37.8%</p>
              <p className="text-xs">Since last month</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#CAF1FF] rounded-full w-18 h-18"></div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Earning</p>
            <p className="text-3xl font-semibold">$198k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowUp className="text-green-500" width={15} height={15} />
              <p className="text-xs text-green-500">37.8%</p>
              <p className="text-xs">Since last month</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#D3FFE7] rounded-full w-18 h-18"></div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Earning</p>
            <p className="text-3xl font-semibold">$198k</p>
            <div className="flex flex-row items-center gap-1">
              <ArrowUp className="text-green-500" width={15} height={15} />
              <p className="text-xs text-green-500">37.8%</p>
              <p className="text-xs">Since last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default statsOverview
