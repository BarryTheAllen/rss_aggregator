import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import AddRssURL from "./AddRssURL";
import styles from "./FeedControls.module.css";
import TagList from "./TagList";
const FeedControls = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <aside className={styles.feedControls}>
      <button
        className={styles.mobileToggle}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <RxCross1 /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`${styles.container} ${isMobile ? styles.mobileOpen : ""}`}
      >
        <AddRssURL />
        <TagList />
      </div>
    </aside>
  );
};

export default FeedControls;
