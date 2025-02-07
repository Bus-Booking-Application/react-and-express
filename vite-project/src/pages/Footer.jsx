import React from 'react'

const Footer = () => {
  return (
   
 
    <footer className="bg-gray-900 text-white py-8 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
     
      <div>
        <h2 className="text-xl font-semibold text-blue-600">Go Vasuki</h2>
        <p className="mt-2 text-gray-400">
          Your trusted partner for convenient and reliable bus travel.
        </p>
      </div>

      
      <div>
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <ul className="mt-2 space-y-2">
          <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="/routes" className="text-gray-400 hover:text-white">Routes</a></li>
          <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
        </ul>
      </div>

    
      <div>
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p className="mt-2 text-gray-400">support@busbooking.com</p>
        <p className="text-gray-400">+1 234 567 890</p>
        <p className="text-gray-400">123 Main Street, City, Country</p>
      </div>
    </div>

   
    <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} BusBooking. All rights reserved.
    </div>
  </footer>

    
  )
}

export default Footer