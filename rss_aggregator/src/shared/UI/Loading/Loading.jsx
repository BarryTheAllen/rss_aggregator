import styles from "./Loading.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p className={styles.loadingTitle}></p>
      <AiOutlineLoading3Quarters className={styles.loadingIcon} />
    </div>
  );
};

export default Loading;
