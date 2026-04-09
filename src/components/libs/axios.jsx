import axios from "axios";

const Instance = axios.create({
    baseURL: "https://affiliate-api-ecru.vercel.app/",
});

export default Instance;