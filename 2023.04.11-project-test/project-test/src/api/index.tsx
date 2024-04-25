import axios from "axios";

const instance = axios.create({
    baseURL: "#",
    timeout: 5000,
});

export default instance;
// /api/axios 요청 함수, hooks queryse
