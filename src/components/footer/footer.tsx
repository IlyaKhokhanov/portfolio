import Image from 'next/image';
import Link from 'next/link';

import git from '@/img/github-icon.svg';

import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.link} href="https://github.com/IlyaKhokhanov" target="_blank">
          <Image
            className={styles.git}
            src={git as string}
            alt="git"
            width={20}
            height={20}
            priority
          />
          <div>IlyaKhokhanov</div>
        </Link>
        <div>© 2024</div>
      </div>
    </footer>
  );
};
