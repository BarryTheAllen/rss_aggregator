import styles from "./Logo.module.css";
import logo from "./assets/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.block}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>RSS</h1>
      </div>
    </div>
  );
};

export default Logo;
