import React from 'react';
import Image from 'next/image';
import styles from './MovieCard.module.scss';
import Link from 'next/link';

const MovieCard = ({ id, title, src }) => {
  const image = src
    ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/original${src}`
    : '/images/poster.jpg';

  return (
    <>
      <div className={styles.movieCard}>
        <Link href={`/movie/${id}`}>
          <a>
            <Image
              className={styles.imageCard}
              src={image}
              alt={title}
              width={220}
              height={330}
            />
            <p> {title} </p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
