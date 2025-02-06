// src/views/CustomerDetails.jsx
// import { getCustomers, updateCustomer, deleteCustomer } from "../controllers/AgentController";
// import { Button } from "../components/ui/Button";
// import { useState } from 'react';

// export default function CustomerDetails() {
//   const [customers, setCustomers] = useState(getCustomers());

//   const handleEdit = (index) => {
//     const updatedName = prompt("Enter new customer name", customers[index].name);
//     if (updatedName) {
//       const updatedCustomer = { ...customers[index], name: updatedName };
//       updateCustomer(index, updatedCustomer);
//       setCustomers([...getCustomers()]);
//     }
//   };

//   const handleDelete = (index) => {
//     deleteCustomer(index);
//     setCustomers([...getCustomers()]);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Customer Details</h2>
//       {customers.map((customer, index) => (
//         <div key={index} className="border p-4 rounded mb-4">
//           <p><strong>Ticket Number:</strong> {customer.ticketNumber}</p>
//           <p><strong>Name:</strong> {customer.name}</p>
//           <p><strong>Email:</strong> {customer.email}</p>
//           <p><strong>Mobile:</strong> {customer.mobileNumber}</p>
//           <div className="flex space-x-2 mt-2">
//             <Button onClick={() => handleEdit(index)}>Edit</Button>
//             <Button variant="outline" onClick={() => handleDelete(index)}>Delete</Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
