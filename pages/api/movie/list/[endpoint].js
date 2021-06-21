import { movieApiInstance } from '@/lib/api/movieApi';

export default async (req, res) => {
  const { endpoint } = req.query;

  try {
    const response = await movieApiInstance.get(`/movie/${endpoint}`, {
      params: {
        api_key: process.env.API_KEY
      }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
};
