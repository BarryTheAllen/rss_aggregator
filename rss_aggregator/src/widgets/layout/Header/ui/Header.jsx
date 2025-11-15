import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "@/shared/UI/Logo";
import { useLogoutUser, useProfileUser } from "@/entities/Auth/api/hooks";
import logoutpic from "../assets/logout.png";

const Header = () => {
  const { data: user, isLoading, isError, error } = useProfileUser();
  const { mutate: logout } = useLogoutUser();

  if (isError && error?.response?.status !== 401) {
    <Error />;
  }

  if (isLoading) {
    return (
      <header className={styles.header}>
        <Link to={"/Home"}>
          <Logo />
        </Link>
        <p className={styles.loading}>Loading...</p>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <Link to={"/Home"}>
        <Logo />
      </Link>
      {user && (
        <div className={styles.profile}>
          <p className={styles.avatar}>{user.username.slice(0, 1)}</p>
          <div className={styles.block}>
            <h3 className={styles.userName}>{user.username}</h3>
            <button className={styles.logoutBtn} onClick={logout}>
              <p className={styles.logoutText}>Logout</p>
              <img className={styles.logoutImg} src={logoutpic} alt="logout" />
            </button>
          </div>
        </div>
      )}
      {!user && (
        <nav className={styles.nav}>
          <Link to={"/Login"} className={styles.link}>
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
