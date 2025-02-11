// src/controllers/CustomerController.js
import { customerData } from "../models/AgentModel";

export function registerCustomer(customer) {
  customerData.push(customer);
}

export function getCustomers() {
  return customerData;
}

export function updateCustomer(index, updatedCustomer) {
  customerData[index] = updatedCustomer;
}

export function deleteCustomer(index) {
  customerData.splice(index, 1);
}
