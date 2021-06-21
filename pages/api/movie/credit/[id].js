import { movieApiInstance } from '@/lib/api/movieApi';

export default async (req, res) => {
  const { id } = req.query;

  try {
    const response = await movieApiInstance.get(`/movie/${id}/credits`, {
      params: {
        api_key: process.env.API_KEY
      }
    });
    res.json(response.data.cast.slice(0, 20));
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json(error.data);
  }
};
