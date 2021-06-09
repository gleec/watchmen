import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.backgroundHero}>
      <div className={styles.textHero}>
        <p>Productora</p>
        <h3>Nombre de la película</h3>
        <nav className={styles.navLink}>
          <ul>
            <li className={styles.navLinkHero}>
              <Link href="/action">
                <a> Action </a>
              </Link>
            </li>
            <li className={styles.navLinkHero}>
              <Link href="/adventure">
                <a> Adventure </a>
              </Link>
            </li>
            <li className={styles.navLinkHero}>
              <Link href="/scienceFiction">
                <a>Science Fiction</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.starHero}>
          <Image src="/icons/star.svg" alt="Star" width={12} height={10} />
          <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
