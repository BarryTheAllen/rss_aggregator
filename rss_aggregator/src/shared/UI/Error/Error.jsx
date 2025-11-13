import styles from "./Error.module.css";
import errorImg from "./assets/errorImg.png";

const Error = ({ errorCode, errorText }) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>
        {errorText}
        {errorCode}
      </p>
      <img src={errorImg} alt="errorImg" className={styles.img} />
    </div>
  );
};

export default Error;
