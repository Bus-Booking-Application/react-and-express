import React from 'react';
import { assets } from '../assets/assets';

function BusBooking() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="bg-sky-300 w-full py-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col bg-white w-[80%] p-5 rounded-lg shadow-lg  ">
            <div className="flex flex-wrap items-center gap-10 mb-4 ml-18 ">
              <select className="p-2 rounded-md border border-gray-300 w-[200px]">
                <option>Chennai</option>
                <option>Coimbatore</option>
                <option>Madurai</option>
              </select>

              <select className="p-2 rounded-md border border-gray-300 w-[200px]">
                <option>Madurai</option>
                <option>Coimbatore</option>
                <option>Chennai</option>
              </select>

              <input type="date" className="p-2 rounded-md border border-gray-300" defaultValue="2025-01-25" />

              <button className="bg-[#ff6b00] text-white px-6 py-2 rounded-md hover:bg-[#ff6b00]/90 cursor-pointer">SEARCH BUS</button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow px-10 py-5">
        <div className='flex bg-gray-300 p-6 rounded-2xl shadow-lg'>
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">TRENDING OFFERS</h2>
              <button className="text-[#ff6b00] cursor-pointer">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               <img src={assets.of} alt="" />
               <img src={assets.off} alt="" />
              <img src={assets.offf} alt="" />
               <img src={assets.su} alt="" />
              <img src={assets.suu} alt="" />
            </div>
          </div>
        </div>

        {/* Bus Routes Section */}
        <div className="mt-10">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <span>›</span>
            <span>Bus</span>
            <span>›</span>
            <span>Chennai Buses</span>
          </div>
          <h2 className="text-lg font-semibold mb-4">Top Bus Routes To Chennai</h2>
          <div className="bg-[#76e3f0] rounded-lg p-4">
            <div className="grid grid-cols-4 px-4 mb-2 text-sm font-medium text-gray-600">
              <div>Bus Operator</div>
              <div>First Bus</div>
              <div>Last Bus</div>
              <div>Price</div>
            </div>
            {Array(5).fill(null).map((_, i) => (
              <div key={i} className="grid grid-cols-4 items-center bg-white rounded-lg p-4 mb-2 last:mb-0">
                <div>
                  <p className="font-medium">King Travels</p>
                  <p className="text-sm text-gray-500">AC Sleeper</p>
                </div>
                <div>
                  <p>01:15</p>
                  <p className="text-sm text-gray-500">Mayiladuthurai</p>
                </div>
                <div>
                  <p>23:59</p>
                  <p className="text-sm text-gray-500">Chennai</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <p className="font-medium text-[#ff6b00]">₹599</p>
                  </div>
                  <button className="bg-[#ff6b00] text-white px-4 py-2 rounded hover:bg-[#ff6b00]/90 cursor-pointer">Select Seats</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 
    </div>
  );
}

export default BusBooking;