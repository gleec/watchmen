import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListOfMovieCards.module.scss';

SwiperCore.use([Navigation]);

const ListOfMovieCards = ({ title, getter }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getter().then(movies => {
      setMovies(movies);
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
        className={styles.swiper}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id} className={styles.carousel}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              src={movie.poster_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListOfMovieCards;
