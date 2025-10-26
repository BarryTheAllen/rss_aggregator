import styles from "./Logo.module.css";
import logo from "./assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.block}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>Rss aggregator</h1>
      </div>
      <span className={styles.logoDesc}>
        Instant access to everything important.
      </span>
    </div>
  );
};

export default Logo;
