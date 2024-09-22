import Link from 'next/link';

import contacts from '@/data/contacts.json';

import styles from './contacts.module.css';

export const ContactsPage = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.header}>Контактная информация</h1>

      <div className={styles.line}>
        <h2 className={styles.title}>{contacts.phone.title}</h2>
        <Link href={`tel:${contacts.phone.link}`} className={styles.link}>
          {contacts.phone.link}
        </Link>
      </div>
      <div className={styles.line}>
        <h2 className={styles.title}>{contacts.mail.title}</h2>
        <Link href={`mailto:${contacts.mail.link}`} className={styles.link}>
          {contacts.mail.link}
        </Link>
      </div>
      {contacts.links.map((link) => (
        <div className={styles.line} key={link.title}>
          <h2 className={styles.title}>{link.title}</h2>
          <Link href={link.url} target="_blank" className={styles.link}>
            {link.link}
          </Link>
        </div>
      ))}
    </div>
  );
};
