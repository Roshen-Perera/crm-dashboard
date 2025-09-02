import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Search } from 'lucide-react';

const productTable = () => {
  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Product Sell</CardTitle>
          </div>
          <div className='flex'>
            <div className="relative w-48 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border-none bg-white pl-10 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative w-48 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border-none bg-white pl-10 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200"
              />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default productTable
