import React from 'react'
import { assets } from '../assets/assets'

const Why = () => {
  return (
        <div >
          <div className='bg-black mt-10 '>
                <img src={assets.offer} alt="" />
             </div>       
              <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Experience the best in bus travel with our premium services and features
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <div className='hover:bg-blue-600 hover:text-white rounded-md p-5'>
                      <p>24/7 Service</p>
                      <p>Round-the-clock customer support and booking service</p>
                    </div>
                    <div className='hover:bg-blue-600 hover:text-white rounded-md p-5'>
                      <p>Wide Coverage</p>
                      <p>Extensive network covering all major cities and towns</p>
                    </div>
                    <div className='hover:bg-blue-600 hover:text-white rounded-md p-5'>
                      <p>Safe Travel</p>
                      <p>Professional drivers and well-maintained vehicles</p>
                    </div>
                  </div>
                </div>
              </section>
              </div>   
  )
}

export default Why