import { ArrowUpNarrowWide } from 'lucide-react';
import React from 'react'

const statsOverview = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex">
        <div className="bg-[#D3FFE7] rounded-full w-12 h-12"></div>
        <div className='flex flex-row'>
            <p className='text-xs text-gray-400'>Earning</p>
            <p className='text-3xl font-semibold'>$198k</p>
            <div>
                <ArrowUpNarrowWide/>
                <p className='text-xs'>37.8%</p>
                <p className='text-xs'>Since last month</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default statsOverview
