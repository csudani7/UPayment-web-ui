import { useQuery } from 'react-query';
import { getAllProducts } from '../services';

export default function useGetAllProducts() {
  return useQuery('getAllProducts', async () => {
    const { data } = await getAllProducts();
    return data;
  });
}
