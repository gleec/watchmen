import React from 'react';
import Image from 'next/image';
import styles from './Search.module.scss';
import getSearch from '@/lib/api/services/getSearch';
import Layout from '@/components/layout';

const Search = ({ searchedMovies }) => {
  return (
    <>
      <Layout>
        <div className={styles.movieList}>
          {searchedMovies.map(movie => (
            <div className={styles.movieItem}>
              <Image
                src={
                  movie.poster_path
                    ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/original${movie.poster_path}`
                    : '/images/poster.jpg'
                }
                alt={movie.title}
                width="180"
                height="260"
              />
              <div className={styles.movieContent}>
                <p className={styles.movieTitle}>{movie.title}</p>
                <p className={styles.movieOverview}>{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context.query;
  const searchedMovies = await getSearch(query);

  return {
    props: {
      searchedMovies
    }
  };
}

export default Search;
