import axios from "axios";
const BASE_URL='http://localhost:3177';
const baseURL = BASE_URL;

export default axios.create({ baseURL: baseURL });
