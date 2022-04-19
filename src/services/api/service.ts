// #global import
import Axios, { AxiosResponse } from 'axios';

// #local import
import { AddProductTypes } from '../../pages/add-product/AddProduct';
import { GetAllCategoryResponse, GetAllProductResponse } from './interface';

const baseAPIUrl = process.env.REACT_APP_API_ENDPOINT;
const axios = Axios.create({
  baseURL: baseAPIUrl,
});

//to fetch all product categories
export const getAllProductCategory = () =>
  axios.get<null, AxiosResponse<Array<GetAllCategoryResponse>>>('/case-study/categories/');

//to fetch all products
export const getAllProducts = () =>
  axios.get<null, AxiosResponse<Array<GetAllProductResponse>>>('/case-study/products/');

//to fetch details of product from id
export const getProductDetails = (id: string) =>
  axios.get<null, AxiosResponse<GetAllProductResponse>>(`/case-study/products/${id}`);

//to save product
export const saveProduct = (body: AddProductTypes.AddProductReqBody) =>
  axios.post<null, AxiosResponse<GetAllProductResponse>>('/case-study/products', body);
