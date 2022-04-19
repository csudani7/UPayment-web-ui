import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { saveProduct } from '../services';
import { AddProductTypes } from '../pages/add-product/AddProduct';

export default function useCreateProduct() {
  return useMutation((data: AddProductTypes.AddProductReqBody) => saveProduct(data), {
    onSuccess: () => {
      toast.success('Product Saved successfully');
    },
    onError: () => {
      toast.error('Something went wrong!');
    },
  });
}
