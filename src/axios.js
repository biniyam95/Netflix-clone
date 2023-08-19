import axios from 'axios'  // real npm install axios library is imported here. now will create an instance with and export it
import { baseUrl } from './constants/constants';

//axios instance
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance