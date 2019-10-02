import axios from 'axios';

const axiosPhoto = axios.create({
    baseURL: 'https://api.unsplash.com/'
});

export default axiosPhoto;