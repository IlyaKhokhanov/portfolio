'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components';
import projects from '@/data/projects.json';

import styles from './projectId.module.css';

export const ProjectIdPage = ({ id }: { id: string }) => {
  const card = projects[+id];

  return (
    <div className={styles.project}>
      <h1 className={styles.title}>{card.title}</h1>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={`/${card.img}`}
          fill
          alt="Photo"
          priority
          blurDataURL={card.img}
        />
      </div>
      <div className={styles.buttons}>
        <Link target="_blank" href={card.deploy} onClick={(e) => e.stopPropagation()}>
          <Button isPrimary={false}>Деплой</Button>
        </Link>
        <Link target="_blank" href={card.code} onClick={(e) => e.stopPropagation()}>
          <Button isPrimary={false}>Код</Button>
        </Link>
      </div>
      <h2 className={styles.title}>Описание</h2>
      <div className={styles.description}>
        {card.desc.map((el) => (
          <div key={el} className={styles.text}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
