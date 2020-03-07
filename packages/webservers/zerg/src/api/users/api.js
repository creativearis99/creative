import request from '../request';
// import { url } from './config';

const api = {
    fetch: (params) => request
        .get('/api/users', { params })
        .then((res) => res.data)
        .catch((error) => error)
};

export default api;
