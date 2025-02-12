//Admin src/views/RegisterAgent.jsx
import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { registerAgent } from "../../controllers/AgentController";

export default function RegisterAgent() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    sector: "Private",
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
    registerAgent(formData);
    setFormData({ companyName: "", email: "", sector: "Private" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <Input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email ID</label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Sector</label>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="sector" value="Private" checked={formData.sector === "Private"} onChange={handleChange} /> Private
          </label>
          <label>
            <input type="radio" name="sector" value="Government" checked={formData.sector === "Government"} onChange={handleChange} /> Government
          </label>
        </div>
      </div>
      
      <div>
      <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Details
            </button>
      </div>
      <Button type="submit">Register Agent</Button>
    </form>
  );
}