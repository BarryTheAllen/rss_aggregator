import {
  useGetArticles,
  useGetArticlesByTag
} from "@/entities/Article/api/hooks";
import styles from "./Article.module.css";
import ArticleCard from "@/entities/Article/ui/ArticleCard";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { useLocation } from "react-router";

const ArticleList = () => {
  const { search } = useLocation();
  const tag = new URLSearchParams(search).get("tag");
  const { data: allArticles } = useGetArticles(!tag);
  const { data: tagged } = useGetArticlesByTag(tag);
  const articles = tag ? tagged : allArticles;
  return (
    <div className={styles.articles}>
      {articles?.map((el, index) => {
        const clean = DOMPurify.sanitize(el.summary);
        const content = parse(clean);
        return <ArticleCard key={index} article={content} />;
      })}
    </div>
  );
};

export default ArticleList;
