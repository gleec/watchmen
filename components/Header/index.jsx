import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <div className={styles.img}>
            <Image
              src="/icons/watchmen.svg"
              alt="Watchmen Logo"
              width={48}
              height={48}
            />
          </div>
          <span>Watchmen</span>
        </a>
      </Link>
      <nav className={styles.leftSideHeader}>
        <ul>
          <li className={styles.navLink}>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
