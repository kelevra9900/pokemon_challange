import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://challenge.butchershop.co/api/v1';

const butcherApi = axios.create({baseURL});

butcherApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    if(config.headers === undefined) {
      config.headers = {}
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default butcherApi;
