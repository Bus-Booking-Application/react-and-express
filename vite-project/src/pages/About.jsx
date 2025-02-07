import React from "react";

const About = () => {
  return (
  
        <div id='about' className="bg-gray-100 min-h-screen p-6">
         
          <div className="bg-blue-600 text-white text-center py-16 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-lg">We are committed to excellence and innovation.</p>
          </div>
    
        
          <div className="mt-10 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to deliver high-quality solutions that empower businesses and individuals.
              We strive to create impactful digital experiences that drive success.
            </p>
          </div>
    
        
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h3 className="text-lg font-semibold mt-4">John Doe</h3>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h3 className="text-lg font-semibold mt-4">Jane Smith</h3>
                <p className="text-gray-500">CTO</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full"
                />
                <h3 className="text-lg font-semibold mt-4">Mike Johnson</h3>
                <p className="text-gray-500">Lead Developer</p>
              </div>
            </div>
          </div>
    
     
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4 text-gray-600">Want to collaborate? Let's talk!</p>
            <a
              href="/contact"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
   
    
  );
};

export default About;
