import axios from 'axios';

const BASE_URL = 'http://20.244.56.144';

export const registerCompany = async (requestData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/register`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error registering company:', error);
    return null;
  }
};

export const getAuthorizationToken = async (requestData) => {
  try {
    const response = await axios.post(`${BASE_URL}/train/auth`, requestData);
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting authorization token:', error);
    return null;
  }
};

export const getAllTrains = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting all trains:', error);
    return [];
  }
};

export const getTrainDetails = async (token, trainNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/train/trains/${trainNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting train details:', error);
    return null;
  }
};