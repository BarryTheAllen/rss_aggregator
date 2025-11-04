import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "@/shared/UI/Logo";
import { useLogoutUser, useProfileUser } from "@/entities/api";
import profilePic from "../assets/profilePic.png";

const Header = () => {
  const { data, isLoading } = useProfileUser();
  const { mutate } = useLogoutUser();

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
      {data && (
        <div className={styles.wrapper}>
          <div className={styles.profile}>
            <img
              src={profilePic}
              alt="profilePic"
              className={styles.profilePicture}
            />
            <div className={styles.profileName}>
              <h3>{data.email}</h3>
              <h4>{data.username}</h4>
            </div>
          </div>
          <p className={styles.logoutBtn} onClick={mutate}>
            Logout
          </p>
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
