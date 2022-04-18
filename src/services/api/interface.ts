export interface ApiCommonResponse {
  status?: string;
  message?: string;
  error?: string;
}

export interface GetAllCategoryResponse {
  id?: string;
  name?: string;
  createdAt?: string;
}

export interface GetAllProductResponse {
  id: string;
  name: string;
  createdAt: string;
  avatar: string;
  developerEmail: string;
  price: string;
  description: string;
  category: string;
}
