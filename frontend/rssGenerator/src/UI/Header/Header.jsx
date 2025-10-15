import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "../Logo/";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/Home"}>
        <Logo />
      </Link>
      <nav>
        <Link to={"/Login"}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
