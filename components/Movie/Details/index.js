import React from 'react';
import styles from './Details.module.scss';

const Details = ({
  homepage,
  releaseDate,
  originalTitle,
  budget,
  revenue,
  productionCo,
  country,
  language
}) => {
  return (
    <>
      <p className={styles.titleSection}> DETAILS </p>
      <div className={styles.description}>
        <a className={styles.link} href={`${homepage}`}>
          <strong>Official site</strong>
        </a>
        <ul>
          <li>
            <span className={styles.bold}> Release date: </span> {releaseDate}
          </li>
          <li>
            <span className={styles.bold}>Original title: </span>
            {originalTitle}
          </li>
          <li>
            <span className={styles.bold}>Budget: </span>
            {budget}
          </li>
          <li>
            <span className={styles.bold}>Revenue: </span>
            {revenue}
          </li>
          <li>
            <span className={styles.bold}>Production Co: </span>
            {productionCo.map(p => p.name).join(', ')}
          </li>
          <li>
            <span className={styles.bold}>Country: </span>
            {country.map(p => p.name).join(', ')}
          </li>
          <li>
            <span className={styles.bold}>Language: </span>
            {language.map(p => p.name).join(', ')}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Details;
