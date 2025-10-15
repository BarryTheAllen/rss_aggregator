import Input from "@/UI/Input";
import styles from "./Login.module.css";
import Button from "@/UI/Button";

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <Input placeholder={"Логин или email"} type={"text"} />
      <Input placeholder={"Пароль"} type={"text"} />
      <Button text={"Войти"} />
    </form>
  );
};

export default Login;
