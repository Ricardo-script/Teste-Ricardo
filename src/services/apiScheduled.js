import axios from 'axios';

const apiScheduled = axios.create({
    baseURL:'https://sagris.com.br/teste-front/api/scheduled'
});

export default apiScheduled;