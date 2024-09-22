'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/img/logo.jpg';

import styles from './header.module.css';
import { useEffect, useState } from 'react';
import { Button } from '@/components';

export const Header = ({ locale }: { locale: string }) => {
  const pathname = usePathname();

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} href={`/${locale}`}>
          <Image
            className={styles.img}
            src={logo}
            alt="logo"
            width={scroll > 0 ? 35 : 55}
            height={scroll > 0 ? 35 : 55}
            priority
          />
        </Link>
        <div className={styles.menu}>
          <Link href={`/${locale}/projects`}>
            <Button isActive={pathname === `/${locale}/projects`}>Проекты</Button>
          </Link>
          <Link href={`/${locale}/about`}>
            <Button isActive={pathname === `/${locale}/about`}>О себе</Button>
          </Link>
          <Link href={`/${locale}/contacts`}>
            <Button isActive={pathname === `/${locale}/contacts`}>Контакты</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
