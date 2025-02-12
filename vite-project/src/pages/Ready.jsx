import React from 'react'

const Ready = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 flex ">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Journey?</h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
            Book your tickets now and experience comfortable travel
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <input placeholder='Contact Support' />
          <button className="bg-[#ff6b00] text-white px-6 py-2 rounded-md hover:bg-[#ff6b00]/90 cursor-pointer" >
            Book Now
          </button>

        </div>
      </div>
    </div>
  </div>

  )
}

export default Ready