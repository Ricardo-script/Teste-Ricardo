import axios from 'axios';

const apiIndicador = axios.create({
    baseURL:'https://sagris.com.br/teste-front/api/access-indicator'
});

export default apiIndicador;