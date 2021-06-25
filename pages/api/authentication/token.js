import { movieApiInstance } from '@/lib/api/movieApi';

export default async function handler(req, res) {
  try {
    const response = await movieApiInstance.get(`/authentication/token/new`, {
      params: {
        api_key: process.env.API_KEY
      }
    });
    res.json(response.data.request_token);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
}
