// function EditForm({ formData, handleInputChange, handleSubmit }) {
//     return (
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
//         <h1 className="text-2xl font-bold mb-6">Edit Details</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
//               Company Name
//             </label>
//             <input
//               type="text"
//               id="companyName"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Sector</label>
//             <div className="mt-2">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="sector"
//                   value="private"
//                   checked={formData.sector === "private"}
//                   onChange={handleInputChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Private</span>
//               </label>
//               <label className="inline-flex items-center ml-6">
//                 <input
//                   type="radio"
//                   name="sector"
//                   value="government"
//                   checked={formData.sector === "government"}
//                   onChange={handleInputChange}
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Government</span>
//               </label>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleInputChange}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             >
//               <option value="traveler">Traveler</option>
//             </select>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Update Details
//             </button>
//           </div>
//         </form>
//       </div>
//     )
//   }
  
//   export default EditForm
  
  