import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  return (
    <div key={article.id} className={styles.container}>
      <h1>{article.title}</h1>
      <p>{article.tags}</p>
      <div className={styles.articlesFeed}>{article}</div>
    </div>
  );
};

export default ArticleCard;
