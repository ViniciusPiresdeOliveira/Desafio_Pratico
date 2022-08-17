import axios from "axios";

export const API = axios.create({
    baseURL: "http://34.123.176.124:8080/"

})

export default API;

// export const createSession = async (login, password) => {
//     return API.get('/api/users', {login, password})
// }