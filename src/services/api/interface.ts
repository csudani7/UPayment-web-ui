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
