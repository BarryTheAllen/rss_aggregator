import styles from "./Error.module.css";
import { MdOutlineErrorOutline } from "react-icons/md";

const Error = ({ errorCode, errorMessage }) => {
  return (
    <div className={styles.errorOverlay}>
      <div className={styles.error}>
        <span className={styles.errorMessage}>{errorMessage}</span>
        <span className={styles.errorCode}>{errorCode}</span>
        <MdOutlineErrorOutline className={styles.errorIcon} />
      </div>
    </div>
  );
};

export default Error;
