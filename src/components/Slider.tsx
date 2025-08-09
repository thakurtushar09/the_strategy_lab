import React from 'react';

export const Slider = () => {
  return (
    <div className="w-full flex items-center overflow-x-auto no-scrollbar">
      <div className="flex-none w-[30%] h-[40vh] bg-white border-2 border-black mr-10 rounded-md"></div>
      <div className="flex-none w-[30%] h-[40vh] bg-white border-2 border-black mr-10 rounded-md"></div>
      <div className="flex-none w-[30%] h-[40vh] bg-white border-2 border-black mr-10 rounded-md"></div>
      <div className="flex-none w-[30%] h-[40vh] bg-white border-2 border-black mr-10 rounded-md"></div>
      <div className="flex-none w-[30%] h-[40vh] bg-white border-2 border-black rounded-md"></div>
    </div>
  );
};
