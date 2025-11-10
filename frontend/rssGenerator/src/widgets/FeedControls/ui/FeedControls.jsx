import AddRssURL from "./AddRssURL";
import styles from "./FeedControls.module.css";
import TagList from "./TagList";

const FeedControls = () => {
  return (
    <aside className={styles.feedControls}>
      <AddRssURL />
      <TagList />
    </aside>
  );
};

export default FeedControls;
