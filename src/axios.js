
import axios from 'axios'

import { baseUrl } from './Components/constants/Constants'; 


const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance