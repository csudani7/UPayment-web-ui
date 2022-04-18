import Axios, { AxiosResponse } from 'axios';
import { GetAllCategoryResponse } from './interface';

const baseAPIUrl = process.env.REACT_APP_API_ENDPOINT;
const axios = Axios.create({
  baseURL: baseAPIUrl,
});

export const getAllProductCategory = () =>
  axios.get<null, AxiosResponse<[GetAllCategoryResponse]>>('/case-study/categories/');
