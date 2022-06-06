import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://52.90.255.18:8080',
});

export const createSession = async (email, senha) =>{
    return api.post('/auth', { email, senha });
}
