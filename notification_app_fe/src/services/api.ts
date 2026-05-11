import axios from "axios";

const API = axios.create({
    baseURL: "/api",
});

API.interceptors.request.use((config) => {
    config.headers.Authorization =
        `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

    return config;
});

export default API;