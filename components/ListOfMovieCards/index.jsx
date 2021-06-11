import React from 'react';
import MovieCard from '../MovieCard';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListofMovieCards.module.scss';
import { width, height } from 'dom7';

SwiperCore.use([Navigation]);

const movieList = [
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/gI9oVLHXgPYidW2W4A7p1pYW9QB.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  },
  {
    src:
      'https://themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg',
    title: 'Title Movie',
    width: 220,
    height: 330
  }
];

const ListOfMovieCards = ({title}) => {
  return (
    <>
      <p className={styles.titleSection}> {title} </p>
      <Swiper
        navigation
        spaceBetween={16}
        slidesPerView={'auto'}
        freeMode={true}
      >
        {movieList.map((movie, i) => (
          <SwiperSlide key={i} className={styles.carousel}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListOfMovieCards;
