import { nextApiInstance } from '@/lib/api/nextApi';

const getAuthentication = async () => {
  const { data } = await nextApiInstance.get(`/api/authentication/token`);
  return data;
};

export default getAuthentication;
