import axiosBase from 'axios';

const axios = axiosBase.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 30000,
})

export default axios;