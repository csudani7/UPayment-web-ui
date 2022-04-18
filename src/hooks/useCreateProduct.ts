import { useMutation } from 'react-query';
import { saveProduct } from '../services';

export default function useCreateProduct() {
  return useMutation((data: any) => saveProduct(data), {
    onSuccess: () => {
      window.console.log('saveProduct successfully');
    },
    onError: () => {
      window.console.log('saveProduct erroer');
    },
  });
}
