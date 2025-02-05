import React from 'react'


 function BusBooking() {
  return (
    <div className= " bg-sky-300 h-50 w-full">
       <div className=' flex justify-center items-center py-10 '>
       <div className= "flex flex-col-10 bg-white  h-30 w-[100%] gap-50 py-5 "> 
        

      <div className="p-4 ">
        <div className="flex flex-wrap items-center gap-50 mb-4 ">
          <select className="p-2 rounded-md border border-gray-300 w-[200px]">
            <option>Madurai</option>
            <option>Chennai</option>
          </select>

         

          <select className="p-2 rounded-md border border-gray-300 w-[200px]">
            <option>Chennai</option>
            <option>Madurai</option>
          </select>

          <input type="date" className="p-2 rounded-md border border-gray-300" defaultValue="2025-01-25" />

          <button className="bg-[#ff6b00] text-white px-6 py-2 rounded-md hover:bg-[#ff6b00]/90 " >SEARCH BUS</button>
        </div>
         </div>
         </div>
        </div>

        <div>
        <div className='flex bg-gray-300 h-60 w-[70%] mt-10  rounded-2xl ml-50 '>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">TRENDING OFFERS</h2>
          <button className="text-[#ff6b00]">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { bg: "bg-indigo-500" },
            { bg: "bg-green-600" },
            { bg: "bg-red-500" },
            { bg: "bg-gray-500" },
            { bg: "bg-orange-500" },
          ].map((offer, i) => (
            <div
              key={i}
              className={`${offer.bg} p-4 rounded-lg text-white cursor-pointer hover:opacity-90 transition-opacity`}>
            
              <p className="text-sm">Save Upto ₹5,250 On bus ticket</p>
              <p className="text-xs mt-2">Valid Till 31 Jan</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>


      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Home</span>
          <span>›</span>
          <span>Bus</span>
          <span>›</span>
          <span>Chennai Buses</span>
        </div>

        <h2 className="text-lg font-semibold mb-4">Top Bus Routes To Chennai</h2>

        <div className="bg-[#ccf7fc] rounded-lg p-4">
          <div className="grid grid-cols-4 px-4 mb-2 text-sm font-medium text-gray-600">
            <div>Bus Operator</div>
            <div>First Bus</div>
            <div>Last Bus</div>
            <div>Price</div>
          </div>

          {Array(5)
            .fill(null)
            .map((_, i) => (
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
                  <button className="bg-[#ff6b00] text-white px-4 py-2 rounded hover:bg-[#ff6b00]/90 cursor-pointer">BOOK NOW</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

  )
}



export default BusBooking