import styles from './LinksPage.module.scss';

export const LinksPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.links}>
        <a href="https://github.com/YuriyDub" className={styles.link}>
          <img src="https://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png" alt="link" />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/yuriy-dub-160241218/" className={styles.link}>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="link" />
          <span>Linkedin</span>
        </a>
        <a href="https://djinni.co/q/093f780cdf/" className={styles.link}>
          <img src="https://djinni.co/static/favicons/v03/favicon-196x196.png" alt="link" />
          <span>Djinni</span>
        </a>
      </div>
      <h3 className="background-text">Links</h3>
    </div>
  );
};
