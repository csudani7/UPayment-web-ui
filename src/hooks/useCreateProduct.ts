import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { saveProduct } from '../services';

export default function useCreateProduct() {
  return useMutation((data: any) => saveProduct(data), {
    onSuccess: () => {
      toast.success('Product Saved successfully');
    },
    onError: () => {
      toast.error('Something went wrong!');
    },
  });
}
