import React from 'react';
import Image from 'next/image';
import styles from './MovieCard.module.scss';

const MovieCard = ({ title, src }) => {
  const image = src
    ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/original${src}`
    : '/images/poster.jpg';

  return (
    <>
      <div className={styles.movieCard}>
        <Image src={image} alt={title} width={220} height={330} />
        <p> {title} </p>
      </div>
    </>
  );
};

export default MovieCard;
