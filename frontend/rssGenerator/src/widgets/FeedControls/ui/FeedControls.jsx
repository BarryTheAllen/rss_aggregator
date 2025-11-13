import { useEffect, useState } from "react";
import AddRssURL from "./AddRssURL";
import styles from "./FeedControls.module.css";
import TagList from "./TagList";
const FeedControls = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobileState(isMobile);
  }, []);

  return (
    <aside className={styles.feedControls}>
      {isMobileState ? (
        <>
          <div>asdasdasdasdas</div>
          <AddRssURL />
          <TagList />
        </>
      ) : (
        <>
          <AddRssURL />
          <TagList />
        </>
      )}
    </aside>
  );
};

export default FeedControls;
