import styles from "./Input.module.css";

const Input = ({ placeholder, type }) => {
  return (
    <input className={styles.input} placeholder={placeholder} type={type} />
  );
};

export default Input;
