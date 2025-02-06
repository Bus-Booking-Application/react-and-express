//Agent  src/controllers/AgentController.js
import { agentData } from "../models/AgentModel";

export function registerAgent(agent) {
  agentData.push(agent);
}

export function getAgents() {
  return agentData;
}

export function updateAgent(index, updatedAgent) {
  agentData[index] = updatedAgent;
}

export function deleteAgent(index) {
  agentData.splice(index, 1);
}


// src/controllers/AgentController.js
// import { customerData } from "../models/AgentModel";

// export function registerCustomer(customer) {
//   customerData.push(customer);
// }

// export function getCustomers() {
//   return customerData;
// }

// export function updateCustomer(index, updatedCustomer) {
//   customerData[index] = updatedCustomer;
// }

// export function deleteCustomer(index) {
//   customerData.splice(index, 1);
// }
