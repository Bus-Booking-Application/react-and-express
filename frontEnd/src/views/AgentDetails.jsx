//src/views/AgentDetails.jsx
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { getAgents, updateAgent, deleteAgent } from "../controllers/AgentController";

export default function AgentDetails() {
  const [agents, setAgents] = useState(getAgents());

  const updateAgentDetails = (index, updatedCompanyName) => {
    const updatedAgent = { ...agents[index], companyName: updatedCompanyName };
    updateAgent(index, updatedAgent);
    setAgents(getAgents());
  };

  const handleEdit = (index) => {
    const currentAgent = agents[index];
    const updatedCompanyName = prompt("Enter new company name", currentAgent.companyName);
    if (updatedCompanyName) {
      updateAgentDetails(index, updatedCompanyName);
    }
  };

  const handleDelete = (index) => {
    deleteAgent(index);
    setAgents(getAgents());
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Agent Details</h2>
      {agents.map((agent, index) => (
        <div key={index} className="border p-4 rounded mb-4">
          <p><strong>Company Name:</strong> {agent.companyName}</p>
          <p><strong>Email:</strong> {agent.email}</p>
          <p><strong>Sector:</strong> {agent.sector}</p>
          <div className="flex space-x-2 mt-2">
            <div>
            <Button type="Edit" onClick={() => handleEdit(index)}>Edit</Button>
            <Button type="Delete" variant="outline" onClick={() => handleDelete(index)}>Delete</Button>
            <button
                    onClick={() => handleEdit(index)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
                  >
                    Edit
                  </button>
                  <br></br>
                  <button
                    onClick={() => handleDelete(index)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
                  >
                    Delete
                  </button>
              </div>            
          </div>
        </div>
      ))}
    </div>
  );
}
