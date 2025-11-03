import styles from "./Home.module.css";
import { Link } from "react-router";
import Articles from "../Articles/";
import { useGetArticles } from "@/shared/api/articles/hooks";
import { useProfileUser } from "@/shared/api";
import Button from "@/shared/UI/Button";

const Home = () => {
  const { data: profile } = useProfileUser();
  const isAuthenticated = Boolean(profile);
  const { data } = useGetArticles(isAuthenticated);
  return (
    <div className={styles.home}>
      {!isAuthenticated && (
        <>
          <span className={styles.preTitle}>Welcome to RSS Aggregator</span>
          <h1 className={styles.title}>Never Miss a Thing Again</h1>
          <p className={styles.subTitle}>
            Your entire digital world, curated in one place. RSS Aggregator
            brings the freshest articles, insightful blogs, and breaking
            news—without noise, ads, or algorithms.
          </p>
          <Link to={"/Registration"}>
            <Button text={"Getting started"} />
          </Link>
        </>
      )}
      {data && (
        <>
          <Link to={"/Feed"}>Добавить ссылку</Link>
          <Articles data={data} />
        </>
      )}
      {!data && profile && (
        <>
          <h1>Здесь будут ваши ленты</h1>
          <Link to={"/Feed"} className={styles.link}>
            Добавить ссылку →
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
