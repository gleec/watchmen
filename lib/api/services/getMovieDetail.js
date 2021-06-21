import { nextApiInstance } from '@/lib/api/nextApi';

const getMovieDetail = async id => {
  const { data } = await nextApiInstance.get(`/api/movie/${id}`);
  return data;
};

export default getMovieDetail;
