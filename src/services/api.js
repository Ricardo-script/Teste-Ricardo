import axios from 'axios';

const apiAproval = axios.create({
    baseURL:'https://sagris.com.br/teste-front/api/access-approval'
});

export default apiAproval;


