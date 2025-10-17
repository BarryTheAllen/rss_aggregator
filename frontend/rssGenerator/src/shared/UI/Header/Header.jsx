import { Link } from "react-router";
import styles from "./Header.module.css";
import Logo from "../Logo";
import { useLogoutUser, useProfileUser } from "@/shared/api";
import profilePic from "./assets/profilePic.png";
import { useRef, useState } from "react";

const Header = () => {
  const { data } = useProfileUser();
  const { mutate } = useLogoutUser();
  return (
    <header className={styles.header}>
      <Link to={"/Home"}>
        <Logo />
      </Link>
      {data ? (
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
      ) : (
        <nav className={styles.nav}>
          <Link to={"/Login"} className={styles.link}>
            Login
          </Link>
          |
          <Link to={"Registration"} className={styles.link}>
            Registration
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
