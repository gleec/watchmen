import axios from 'axios';

export const movieApiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer 9d3d1344db9f30424ccea364f78262a9`,
    'Content-Type': 'application/json'
  }
});
