import React, { useState, useEffect } from 'react';
import MovieCastCard from '../MovieCastCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListOfMovieCastCards.module.scss';
import getMovieCredit from '../../../lib/api/services/getMovieCredit';

const DEFAULT_TITLE = 'CAST';
const ListOfMovieCastCards = ({ id, title = DEFAULT_TITLE }) => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCredit(id).then(movieCast => {
      setMovieCast(movieCast);
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
        {movieCast.map(cast => (
          <SwiperSlide key={cast.id} className={styles.carousel}>
            <MovieCastCard title={cast.name} src={cast.profile_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListOfMovieCastCards;
