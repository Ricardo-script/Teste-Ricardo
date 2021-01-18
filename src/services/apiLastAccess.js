import axios from 'axios';

const apiLastAccess = axios.create({
    baseURL:'https://sagris.com.br/teste-front/api/last-access'
});

export default apiLastAccess;