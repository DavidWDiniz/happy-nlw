import axios from "axios";

const api = axios.create({
    baseURL: "https://happy-davidwdiniz.herokuapp.com/",
});

export default api;
