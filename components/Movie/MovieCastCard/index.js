import React from 'react';
import Image from 'next/image';
import styles from './MovieCastCard.module.scss';

const MovieCastCard = ({ title, src }) => {
  const image = src
    ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/original${src}`
    : '/images/poster.jpg';

  return (
    <>
      <div className={styles.movieCastCard}>
        <Image
          className={styles.imageCast}
          src={image}
          alt={title}
          width={180}
          height={270}
          object-fit="cover"
        />
        <p> {title} </p>
      </div>
    </>
  );
};

export default MovieCastCard;
