import React from 'react'
import { assets } from '../assets/assets'

const Heading = () => {
  return (
    <div className=" flex flex-col  bg-sky-300  w-full mt-10">
            <div className=' flex justify-center items-center py-10 '>
              <div className="flex flex-col-10 bg-white  h-80 w-[100%] gap-2 py-5 ">
                <img className="" src={assets.bus} alt="" />
                <div className="p-2  ">
                  <div className="flex flex-wrap  justify-center items-center gap-5 ml-30 mt-25 ">
    
                    <input className="p-2 rounded-md border border-black-300 w-[200px]" placeholder="From"/>
                    <input className="p-2 rounded-md border border-black-300 w-[200px]" placeholder="To"/>
                    <input type="date" className="p-2 rounded-md border border-black-300" defaultValue="2025-01-25" />
    
                    <button className="bg-[#ff6b00] text-white px-6 py-2 rounded-md hover:bg-[#ff6b00]/90 cursor-pointer" >SEARCH BUS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Heading