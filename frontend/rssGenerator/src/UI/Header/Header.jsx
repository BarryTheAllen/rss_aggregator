import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/Home"} className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
        <h1 className={styles.logoTitle}>Rss Agregator</h1>
      </Link>
      <nav>
        <Link to={"/Login"}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
