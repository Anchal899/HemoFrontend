import axios from "axios";
const BASE_URL='https://hemobackend.onrender.com'
const baseURL = BASE_URL;

export default axios.create({ baseURL: baseURL });
