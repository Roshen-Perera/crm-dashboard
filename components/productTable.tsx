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
          <div className="flex gap-4">
            <div className="relative w-48 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border-none bg-gray-100 pl-10 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200"
              />
            </div>
            <div className="relative w-48 md:w-40">
                <select className="w-full rounded-lg border-none bg-gray-100 pl-4 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200">
                  <option value="">Last 30 Days</option>
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                </select>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default productTable
