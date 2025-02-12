import React from "react";

const Contact = () => {

 
  return (

    <div id='contact' className="flex items-center justify-center mt-10 mb-10 ">
    <div className="w-2/1 max-w-lg p-6 bg-white rounded-2xl shadow-lg ">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
