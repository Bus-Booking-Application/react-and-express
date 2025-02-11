// src/views/RegisterCustomer.jsx
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { registerCustomer } from "../controllers/CustomerController";

export default function RegisterCustomer() {
  const [formData, setFormData] = useState({
    ticketNumber: `TICKET-${Math.floor(Math.random() * 10000)}`,
    name: "",
    email: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerCustomer(formData);
    setFormData({ ticketNumber: `TICKET-${Math.floor(Math.random() * 10000)}`, name: "", email: "", mobileNumber: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Ticket Number</label>
        <Input type="text" name="ticketNumber" value={formData.ticketNumber} disabled />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <Input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
      </div>
      <div>
     <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Details
            </button>
      </div>
      <Button type="submit">Register Customer</Button>
    </form>
  );
}
