import { nextApiInstance } from '@/lib/api/nextApi';

const getMovieCredit = async id => {
  const { data } = await nextApiInstance.get(`/api/movie/credit/${id}`);
  return data;
};

export default getMovieCredit;
