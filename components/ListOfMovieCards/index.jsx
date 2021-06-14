import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListofMovieCards.module.scss';
import getMovies from '../../lib/api/services/getMovies';

SwiperCore.use([Navigation]);

const ListOfMovieCards = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(endpoint).then(res => {
      console.log(res);
      setMovies(res.data.results);
      console.log(movies);
    });
  }, []);

  return (
    <>
      <p className={styles.titleSection}> {title} </p>
      <Swiper
        navigation
        spaceBetween={16}
        slidesPerView={'auto'}
        freeMode={true}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={i} className={styles.carousel}>
            <MovieCard title={movie.title} src={movie.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListOfMovieCards;
