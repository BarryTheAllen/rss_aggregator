import styles from "./Logo.module.css";
import logo from "./assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" className={styles.logoImg} />
      <h1 className={styles.logoTitle}>Rss agregator</h1>
    </div>
  );
};

export default Logo;
