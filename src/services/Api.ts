import axios from 'axios';
import { config } from 'config';

const Api = axios.create({
    baseURL: config.api.newYorkTimesApi.baseURL
})

// Api.interceptors.request.use((config) => {
//     config.params = config.params || {};
//     config.params['api-key'] = config.api.newYorkTimesApi.apiKey;
//     return config;
// });

export default Api;