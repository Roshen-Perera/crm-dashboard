"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Search } from "lucide-react";
import Image from "next/image";

const ProductTable = () => {
    const [products] = useState([
      {
        name: "Abstract 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        totalSales: 20,
        image: "/assets/image1.png",
      },
      {
        name: "Abstract 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        totalSales: 20,
        image: "/assets/image2.png",
      },
      {
        name: "Abstract 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        totalSales: 20,
        image: "/assets/image3.png",
      },
      {
        name: "Abstract 3D",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stock: 32,
        price: 45.99,
        totalSales: 20,
        image: "/assets/image4.png",
      },
    ]);

  return (
    <div>
      <Card className="flex flex-col border-none shadow-none">
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
              <select
                className="w-full rounded-lg border-none bg-gray-100 pl-4 pr-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white
                     placeholder:text-gray-400 transition-all duration-200"
              >
                <option value="">Last 30 Days</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-6 py-4 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-600">Product Name</div>
          <div className="text-sm font-medium text-gray-600 text-center">
            Stock
          </div>
          <div className="text-sm font-medium text-gray-600 text-center">
            Price
          </div>
          <div className="text-sm font-medium text-gray-600 text-center">
            Total Sales
          </div>
        </div>

        {products.map((product, index) => (
          <div key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center px-6">
            <div className="flex items-center space-x-3">
              <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-md" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {product.description}
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">{product.stock} in stock</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">${product.price}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">{product.totalSales}</p>
          </div>
        </div>
        ))}
      </Card>
    </div>
  );
};

export default ProductTable;
