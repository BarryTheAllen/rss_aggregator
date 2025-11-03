import {
  useGetArticles,
  useRefreshArticles
} from "@/shared/api/articles/hooks";
import styles from "./Articles.module.css";
import Button from "@/shared/UI/Button";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const Articles = ({ data }) => {
  const { mutate } = useRefreshArticles();

  return (
    <div className={styles.articles}>
      <Button text={"Обновить ленту"} onClick={mutate} />
      {data &&
        data.map(el => {
          const clean = DOMPurify.sanitize(el.summary);
          const content = parse(clean);
          return (
            <div key={el.id} className={styles.container}>
              <h1>{el.title}</h1>
              <p>{el.tags}</p>
              <div className={styles.articlesFeed}>{content}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
