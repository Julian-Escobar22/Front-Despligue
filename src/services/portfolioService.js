// src/services/portfolioService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/portfolios';

export const getPortfolios = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createPortfolio = async (portfolio) => {
    try {
        const response = await axios.post(API_URL, portfolio);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const updatePortfolio = async (id, portfolio) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, portfolio);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deletePortfolio = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
