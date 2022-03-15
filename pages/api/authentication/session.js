import { movieApiInstance } from '@/lib/api/movieApi';

export default async (req, res) => {
  try {
    const response = await movieApiInstance.post(
      `/authentication/session/new`,
      req.body,
      {
        params: {
          api_key: process.env.API_KEY
        }
      }
    );
    res.json(response.data.session_id);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
};
