import getMovieDetail from './getMovieDetail';
import { nextApiInstance } from '@/lib/api/nextApi';

const getMovies = async endpoint => {
  const { data } = await nextApiInstance.get(endpoint);
  return data;
};

export const getNowPlayingMovies = () => {
  return getMovies('/api/movie/list/now_playing');
};

export const getPopularMovies = () => {
  return getMovies('/api/movie/list/popular');
};

export const getRecommendations = id => {
  return getMovies(`/api/movie/recommendation/${id}`);
};

export const getUpcomingMovies = () => {
  return getMovies('/api/movie/list/upcoming');
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomMovie = async () => {
  const endpoints = [
    '/api/movie/list/now_playing',
    '/api/movie/list/popular',
    '/api/movie/list/upcoming'
  ];
  const data = await getMovies(endpoints[getRandomInt(0, 1)]);

  const movieId = data[getRandomInt(0, 19)].id;
  return await getMovieDetail(movieId);
};
