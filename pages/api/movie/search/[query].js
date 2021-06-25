import { movieApiInstance } from '@/lib/api/movieApi';

export default async (req, res) => {
  const { query } = req.query;

  try {
    const response = await movieApiInstance.get(`/search/movie`, {
      params: {
        api_key: process.env.API_KEY,
        query
      }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
};
