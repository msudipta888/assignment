import React from "react";
import business from './assests/busniess.png';
import print from './assests/print.png';
import award from './assests/award.png';
import { ArrowRight } from 'lucide-react';

const News: React.FC = () => (
  <div className="flex flex-col items-center gap-10 mt-9 h-full md:h-screen">
    <div className="w-full text-center mb-6">
      <h1 className="text-4xl font-bold">
        We’ve Also Been In <span className="text-4xl font-bold text-blue-600">News!</span>
      </h1>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="relative flex flex-col items-center h-96 max-w-80 p-4 shadow-xl bg-white rounded-lg mt-4 md:mt-14">
        <img src={print} alt="Print" className=" w-28 mb-2 -ml-36" />
        <p className="text-xs -mt-10 ml-52 ">31 March, 2023</p>
        <img src={award} alt="Award" className="h-52 w-56 mb-2 rounded-md" />
        <p className="text-center text-sm font-medium">Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40</p>
        <p className="text-blue-500 cursor-pointer text-sm font-semibold mt-2">Read article</p>
        <div className="absolute bottom-8 left-72 transform -translate-x-1/2 w-9 h-0  mt-2">{<ArrowRight className="text-blue-700 w-11"/>}</div>
      </div>

      {/* Card 2 */}
      <div className="relative flex flex-col items-center  h-96 max-w-80 p-4 shadow-xl bg-white rounded-lg mt-4 md:mt-14">
        <img src={business} alt="Business" className=" w-28 mb-2 -ml-32" />
        <p className="text-xs -mt-10 ml-52 ">01 March, 2023</p>
        <img src={award} alt="Award" className="h-52 w-56 mb-2 rounded-md" />
        <p className="text-center text-sm font-medium">Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40</p>
        <p className="text-blue-500 cursor-pointer text-sm font-semibold mt-2">Read article</p>
        <div className="absolute bottom-8 left-72 transform -translate-x-1/2 w-9 h-0  mt-2">{<ArrowRight className="text-blue-700 w-11"/>}</div>
      </div>

      {/* Card 3 */}
      <div className="relative flex flex-col items-center  h-96 max-w-80 p-4 shadow-xl bg-white rounded-lg mt-4 md:mt-14">
        <img src={print} alt="Print" className="w-28 mb-2 -ml-32" />
        <p className="text-xs -mt-10 ml-52 ">01 March, 2023</p>
        <img src={award} alt="Award" className="h-52 w-56 mb-2 rounded-md" />
        <p className="text-center text-sm font-medium">Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40</p>
        <p className="text-blue-500 cursor-pointer text-sm font-semibold mt-2">Read article</p>
        <div className="absolute bottom-8 left-72 transform -translate-x-1/2 w-9 h-0  mt-2">{<ArrowRight className="text-blue-700 w-11"/>}</div>
      </div>
    </div>
  </div>
);

export default News;
