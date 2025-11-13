import styles from "./Input.module.css";

const Input = ({ placeholder, type, ...props }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};

export default Input;
