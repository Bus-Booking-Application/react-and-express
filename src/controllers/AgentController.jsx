// // //Agent  src/controllers/AgentController.js
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


