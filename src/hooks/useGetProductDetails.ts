import { useQuery } from 'react-query';
import { getProductDetails } from '../services';

export default function useGetProductDetails(id: string) {
  return useQuery(['getProductDetails', id], async () => {
    const { data } = await getProductDetails(id);
    return data;
  });
}
