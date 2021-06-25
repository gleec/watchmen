import { movieApiInstance } from '@/lib/api/movieApi';

export default async (req, res) => {
  console.log(req.body);
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
    console.log(response.data);
    res.json(response.data.session_id);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
};
