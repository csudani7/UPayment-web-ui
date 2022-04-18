import Axios, { AxiosResponse } from 'axios';
import { GetAllCategoryResponse, GetAllProductResponse } from './interface';

const baseAPIUrl = process.env.REACT_APP_API_ENDPOINT;
const axios = Axios.create({
  baseURL: baseAPIUrl,
});

export const getAllProductCategory = () =>
  axios.get<null, AxiosResponse<[GetAllCategoryResponse]>>('/case-study/categories/');

export const getAllProducts = () =>
  axios.get<null, AxiosResponse<[GetAllProductResponse]>>('/case-study/products/');

export const getProductDetails = (id: string) =>
  axios.get<null, AxiosResponse<GetAllProductResponse>>(`/case-study/products/${id}`);

export const saveProduct = (body: any) =>
  axios.post<null, AxiosResponse<any>>('/case-study/products', body);
