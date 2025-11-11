import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "@/shared/UI/Logo";
import { useLogoutUser, useProfileUser } from "@/entities/Auth/api/hooks";
import logoutpic from "../assets/logout.png";
import BurgerMenu from "@/shared/UI/BurgerMenu";

const Header = () => {
  const { data, isLoading, isError, error } = useProfileUser();
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
      <div className={styles.block}>
        <Link to={"/Home"}>
          <Logo />
        </Link>
        <BurgerMenu />
      </div>
      {data && (
        <div className={styles.wrapper}>
          <div className={styles.profile}>
            <p className={styles.avatar}>{data.username.slice(0, 1)}</p>
            <div className={styles.profileName}>
              <h3>{data.username}</h3>
              <div className={styles.logoutBtn} onClick={logout}>
                <p className={styles.logoutText}>Logout</p>
                <img
                  className={styles.logoutImg}
                  src={logoutpic}
                  alt="logout"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!data && (
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
