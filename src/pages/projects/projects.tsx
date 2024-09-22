'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';
import projects from '@/data/projects.json';

import styles from './projects.module.css';

export const ProjectsPage = () => {
  const router = useRouter();

  return (
    <div className={styles.projects}>
      {projects.map((el, indx) => (
        <div
          className={styles.card}
          onClick={() => {
            router.push(`/ru/projects/${indx}`);
          }}
          key={el.title}
        >
          <h2 className={styles.title}>{el.title}</h2>
          <Image
            className={styles.img}
            src={`/${el.img}`}
            alt="logo"
            width={300}
            height={150}
            priority
          />
          <div className={styles.buttons}>
            <Link target="_blank" href={el.deploy} onClick={(e) => e.stopPropagation()}>
              <Button isPrimary={false}>Деплой</Button>
            </Link>
            <Link target="_blank" href={el.code} onClick={(e) => e.stopPropagation()}>
              <Button isPrimary={false}>Код</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
