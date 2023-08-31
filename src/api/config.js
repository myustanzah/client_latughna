import axios from 'axios';

// axios.interceptors.request.use(config => {
//     if (config.data instanceof FormData) {
//       Object.assign(config.headers, config.data.getHeaders());
//     }
//     return config;
//   });

export default axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    withCredentials: false,
    headers: {'Access-Control-Allow-Origin': '*'}
})
