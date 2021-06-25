import { nextApiInstance } from '@/lib/api/nextApi';

const getSearch = async query => {
  const { data } = await nextApiInstance.get(`/api/movie/search/${query}`);
  return data;
};

export default getSearch;
