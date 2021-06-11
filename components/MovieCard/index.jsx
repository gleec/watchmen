import React from 'react';
import Image from 'next/image';
import styles from './MovieCard.module.scss';

const DEFAULT_IMAGE =
  'https://www.themoviedb.org/t/p/w220_and_h330_face/cEmpGjZZu3JSlkKm8NUuCzrUscR.jpg';

const MovieCard = ({ title, src = DEFAULT_IMAGE, width, height }) => {
  return (
    <>
      <div className={styles.movieCard}>
        <Image src={src} alt="Riverdale" width={width} height={height} />
        <p> {title} </p>
      </div>
    </>
  );
};

export default MovieCard;
