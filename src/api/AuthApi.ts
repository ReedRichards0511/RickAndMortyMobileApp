import axios from "axios";

export const authApi = axios.create({
    baseURL: "https://mern-calendar-backend-mau.herokuapp.com/api",
});