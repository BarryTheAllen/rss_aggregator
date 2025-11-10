import styles from "./FeedControls.module.css";
import { useNavigate } from "react-router";
import { useGetArticles } from "@/entities/api";
import { useEffect, useState } from "react";
import Button from "@/shared/UI/Button";

const TagList = () => {
  const { data: articles } = useGetArticles();
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (articles) {
      const allTags = articles.flatMap(article => article.tags || []);
      const uniqueTags = [...new Set(allTags)];
      setTags(uniqueTags);
    }
  }, [articles]);

  const tagFilter = tag => {
    navigate(`/Feed?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className={styles.tagList}>
      <p className={styles.aviavableTags}>Available tags: </p>
      <ul className={styles.feedTags}>
        {tags.map(tag => (
          <li key={tag}>
            <button
              className={styles.option}
              text={tag}
              onClick={() => tagFilter(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
