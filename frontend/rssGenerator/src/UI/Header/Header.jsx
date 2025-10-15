import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "../Logo/";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/Home"}>
        <Logo />
      </Link>
      <nav className={styles.nav}>
        <Link to={"/Login"} className={styles.link}>
          Login
        </Link>
        |
        <Link to={"Registration"} className={styles.link}>
          Registration
        </Link>
      </nav>
    </header>
  );
};

export default Header;
