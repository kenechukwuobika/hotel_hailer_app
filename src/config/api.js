import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API_URL } from "./constants";

const backend = axios.create({
    baseURL: API_URL,
    timeout: 6000
})

backend.interceptors.request.use(config => {
	const token = AsyncStorage.getItem('authToken');
	
  if (token) {
    config.headers['authorization'] = `Bearer ${token}`
  }

  return config
}, error => {
	// Do something with request error here
	// notification.error({
	// 	message: 'Error'
	// })
  Promise.reject(error)
})

export default backend