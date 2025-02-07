import React from 'react'
import { assets } from '../assets/assets'

const Government = () => {
  return (
    <div>
    <div className=" flex flex-col-6  ">
    <p className="p-8"><b>NOW,GET MORE THAN JUST BUS TICKETS WITH EXPRESS BUS</b> </p>
    <p className=" p-9 pl-150 ">Help</p>
    <p className="p-9">English </p>
    <p className="p-9">Account</p>
  </div>

    <div className="flex-grow px-10 py-5">
            <div className='flex bg-gray-300 p-6 rounded-2xl shadow-lg'>
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">GOVERNMENT BUSES</h2>
                  <button className="text-[#ff6b00] cursor-pointer">View All</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                   <img src={assets.suu} alt="" />
                   <img src={assets.va} alt="" />
                  <img src={assets.va2} alt="" />
                   <img src={assets.suu} alt="" />
                  <img src={assets.va} alt="" />
                </div>
              </div>
            </div>
            </div>
            </div>
  )
}

export default Government