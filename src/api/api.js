import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://54.173.8.7:8080',
});

export const createSession = async (email, senha) =>{
    return api.post('/auth', { email, senha });
}
