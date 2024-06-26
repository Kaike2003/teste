import axios from "axios"
import { getToken } from "./login";


export const api = axios.create({
    baseURL: "http://localhost:8889",
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


