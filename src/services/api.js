import axios from "axios";

//https://viacep.com.br/ws/01310930/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/",
        headers: {
            "Content-Type": "application/json"
        }
});

export default api;
