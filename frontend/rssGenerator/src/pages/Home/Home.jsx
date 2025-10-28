import styles from "./Home.module.css";
import { Link } from "react-router";
import Articles from "../Articles/";
import { useGetArticles } from "@/shared/api/articles/hooks";

const Home = () => {
  const { data } = useGetArticles();
  return (
    <div className={styles.home}>
      {data && (
        <>
          <Link to={"/Feed"}>Добавить ссылку</Link>
          <Articles />
        </>
      )}
      {!data && (
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
