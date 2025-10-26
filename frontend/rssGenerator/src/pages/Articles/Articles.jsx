import {
  useGetArticles,
  useRefreshArticles
} from "@/shared/api/articles/hooks";
import styles from "./Articles.module.css";
import Button from "@/shared/UI/Button";

const Articles = () => {
  const { data } = useGetArticles();
  const { mutate } = useRefreshArticles();

  return (
    <div className={styles.articles}>
      <Button text={"Обновить ленту"} onClick={mutate} />
      {data &&
        data.map(el => (
          <div key={el.id} className={styles.container}>
            <h1>{el.title}</h1>
            <p>{el.tags}</p>
            <div
              className={styles.articlesFeed}
              dangerouslySetInnerHTML={{ __html: el.summary }}
            ></div>
          </div>
        ))}
    </div>
  );
};

export default Articles;
