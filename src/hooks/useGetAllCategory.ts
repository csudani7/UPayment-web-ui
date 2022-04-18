import { useQuery } from 'react-query';
import { getAllProductCategory } from '../services';

export default function useGetAllCategory() {
  return useQuery('allProductCategory', async () => {
    const { data } = await getAllProductCategory();
    return data;
  });
}
