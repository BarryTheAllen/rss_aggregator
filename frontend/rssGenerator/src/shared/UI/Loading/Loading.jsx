import styles from "./Loading.module.css";
import loadingImg from "./assets/loading.png";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p className={styles.loadingTitle}>Loading...</p>
      <img src={loadingImg} className={styles.loadingImg} alt="loading" />
    </div>
  );
};

export default Loading;
