import styles from "./Feed.module.css";
import FeedControls from "@/widgets/FeedControls/ui/FeedControls";
import ArticleList from "@/features/ArticlesList/ui/ArticleList";

const Feed = () => {
  return (
    <div className={styles.layout}>
      <FeedControls />
      <ArticleList />
    </div>
  );
};

export default Feed;
