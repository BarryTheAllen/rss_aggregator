import { useEffect } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { Link } from "react-router";
import Articles from "../Articles/";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to={"/Feed"}>Лента новостей</Link>
      <Articles />
    </div>
  );
};

export default Home;
