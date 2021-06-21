import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Link from 'next/link';

const bg = src => ({
  backgroundImage: `
    linear-gradient(to bottom, #020414 5%,transparent 50%, rgb(2 4 20 / 60%) 70%, rgb(2 4 20 / 95%) 90%, #020414 100%),
    url(${src})
  `
});

const Hero = ({
  producer,
  movieName,
  movieGenres,
  movieRatting,
  backdropPath
}) => {
  return (
    <div
      className={styles.backgroundHero}
      style={bg(
        `${process.env.NEXT_PUBLIC_IMAGES_URL}/original${backdropPath}`
      )}
    >
      <div className={styles.textHero}>
        <p>{producer}</p>
        <h3>{movieName}</h3>
        <nav className={styles.navLink}>
          <ul>
            {movieGenres.map(g => (
              <li key={g.id} className={styles.navLinkHero}>
                <Link href="/">
                  <a> {g.name} </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.starHero}>
          <span>{movieRatting}</span>
          <Image src="/icons/star.svg" alt="Star" width={12} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
