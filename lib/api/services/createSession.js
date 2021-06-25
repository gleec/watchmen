import { nextApiInstance } from '@/lib/api/nextApi';

const createSession = async request_token => {
  const { data } = await nextApiInstance.post(`/api/authentication/session`, {
    request_token
  });
  return data;
};

export default createSession;
