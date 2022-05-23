import axios from "axios";

const API_URL = process.env.API_URL;

class Auth {
    async login(email, password) {
        const response = await axios.post(API_URL + 'login.php', { email, password });
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    async register(name, email, password) {
        const response = await axios.post(API_URL + 'register.php', {name, email, password});
        return response.data;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export const {login, register, getCurrentUser, logout} = new Auth();

// export default new Auth();
// export default {
//     login, register, getCurrentUser, logout
// };