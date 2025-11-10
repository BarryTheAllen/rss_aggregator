import styles from "./Home.module.css";
import { Link } from "react-router";
import Button from "@/shared/UI/Button";

const Home = () => {
  return (
    <div className={styles.home}>
      <span className={styles.preTitle}>Welcome to RSS Aggregator</span>
      <h1 className={styles.title}>Never Miss a Thing Again</h1>
      <p className={styles.subTitle}>
        Your entire digital world, curated in one place. RSS Aggregator brings
        the freshest articles, insightful blogs, and breaking news—without
        noise, ads, or algorithms.
      </p>
      <Link to={"/Registration"}>
        <Button text={"Getting started"} />
      </Link>
    </div>
  );
};

export default Home;
