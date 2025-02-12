import React from 'react'
import { assets } from '../assets/assets'

const Trending = () => {
  return (  
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
            </div>
         
  )
}

export default Trending