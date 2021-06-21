import React from 'react';
import styles from './OverViewMovie.module.scss';

const OverViewMovie = ({ description }) => {
  return (
    <>
      <p className={styles.titleSection}> OVERVIEW </p>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default OverViewMovie;
