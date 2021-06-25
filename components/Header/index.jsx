import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import Search from '../Movie/Search';
import { MdPerson } from 'react-icons/md';
import getAuthentication from '@/lib/api/services/getAuthentication';
import { useRouter } from 'next/router';
import createSession from '@/lib/api/services/createSession';

const SIZE = '32px';
const COLOR = '#ff002e';
// http://localhost:4000/?request_token=b8cc23cb0e2bd1e0433b805ac365e8977df20180&approved=true
const Header = () => {
  const router = useRouter();
  const { request_token, approved } = router.query;

  const authentication = async () => {
    const token = await getAuthentication();
    window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.NEXT_PUBLIC_BASE_URL}`;
  };

  useEffect(() => {
    if (approved) {
      // createSession(request_token);
      createSession(request_token).then(session => {
        console.log(session);
      });
      console.log(approved, request_token);
    }
  }, [approved]);

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
            <Search />
          </li>
          <li className={styles.navLink}>
            <button className={styles.button} onClick={() => authentication()}>
              <MdPerson size={SIZE} color={COLOR} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
