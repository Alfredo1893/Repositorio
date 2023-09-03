// src/api.js
import axios from 'axios';
console.log()
const API_URL = 'https://denny2023.azurewebsites.net/swagger/v1/swagger.json';

export const getAllItems = async () => {
  const response = await axios.get(`${API_URL}/api/celulares`);
  return response.data;
};

// Implement functions for create, update, and delete as needed
