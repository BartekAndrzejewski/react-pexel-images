import axios from 'axios';
console.log('ddd', process.env.REACT_APP_PEXELS_API_KEY)
const apiClient = axios.create({
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY,
  },
});

export default apiClient;
