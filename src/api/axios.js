import axios from "axios";

const api = axios.create({
    baseURL: process.env.Spring_API_URL
});

export default api;