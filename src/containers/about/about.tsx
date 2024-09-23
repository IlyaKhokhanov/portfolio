import Link from 'next/link';
import Image from 'next/image';

import about from '@/data/about.json';
import photo from '@/img/photo.jpg';

import styles from './about.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        {about.map((el, indx) => (
          <div key={indx}>
            {el.title && <h2 className={styles.title}>{el.title}</h2>}
            {el.miniTitle?.length &&
              el.miniTitle.map((title) => (
                <h3 className={styles.miniTitle} key={title}>
                  {title}
                </h3>
              ))}
            {el.text?.length &&
              el.text.map((text) => (
                <div className={styles.text} key={text}>
                  {text}
                </div>
              ))}
            {el.links?.length &&
              el.links.map((link) => (
                <Link href={link.url} target="_blank" className={styles.link} key={link.title}>
                  {link.title}
                </Link>
              ))}
          </div>
        ))}
      </div>
      <div className={styles.header}>
        <Image className={styles.img} src={photo} alt="logo" width={200} height={300} priority />
        <div>
          <h1 className={styles.name}>Илья Хоханов</h1>
          {/* <div>Фронтенд разработчик (React)</div> */}
        </div>
      </div>
    </div>
  );
};
