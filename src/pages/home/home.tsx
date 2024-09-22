import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Добро пожаловать на мой сайт!</h1>

      <div className={styles.block}>
        <div className={styles.text}>
          Меня зовут Илья, я React разработчик, увлеченный созданием эффективных и современных
          веб-приложений. Рад приветствовать вас на своем сайте!
        </div>
        <div className={styles.desc}>Здесь вы найдете:</div>
        <div className={styles.desc}>
          - Информацию о моем профессиональном опыте, технических компетенциях и подходе к
          разработке современных веб-приложений.
        </div>
        <div className={styles.desc}>
          - Примеры реализованных мной проектов и технические решения, которые я использовал.
        </div>
        <div className={styles.desc}>
          - Мои контакты, если у вас есть предложения или вопросы для сотрудничества, свяжитесь со
          мной.
        </div>
      </div>
    </div>
  );
};
