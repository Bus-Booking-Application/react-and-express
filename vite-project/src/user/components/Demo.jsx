import React from 'react'
import { assets } from '../assets/assets'



const Demo = () => {
  return (
    <div>
      <div className= " bg-sky-300 h-50 w-full">
          <div className=' flex justify-center items-center py-10 '>
            <div className= "flex flex-col-10 bg-white  h-30 w-[100%] gap-30 py-5 ">
            <h1 className="p-8">Madurai</h1>
            <h1></h1>
            <h1 className="p-8 ">Chennai</h1>
            <h1 className="p-8">29.01.2025</h1>
            <h1 className="p-8">10:00pm-7:30pm</h1>
            <button className="bg-amber-600 cursor-pointer px-4 py-[-5] rounded-2xl " >Search Bus</button>
            </div>


</div>

</div>
<img className="w-full" src={assets.discount} alt="bus " />


<div>
 <div className='flex bg-gray-300 h-60 w-[70%] mt-10  rounded-2xl ml-50 '>
  <h1 className="p-5"><b>TRENDING OFFERS</b></h1>
  <button className="pl-[70%] mb-35 cursor-pointer"><b>View All</b></button>
  <div className="">
    <div className= ""></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

 </div>


</div>

</div>
  )
}

export default Demo