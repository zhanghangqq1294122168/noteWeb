import axios from "axios";
axios.defaults.baseURL = '/note';
const http = axios.create({
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
});
export default http;