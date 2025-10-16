import Input from "@/shared/UI/Input";
import styles from "./Login.module.css";
import Button from "@/shared/UI/Button";
import Logo from "@/shared/UI/Logo";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    identifier: "",
    password: ""
  });
  const [formError, setFormError] = useState({
    identifierErr: "",
    passwordErr: ""
  });

  const handleChangeInput = e => {
    const key = e.target.name;
    const newValue = e.target.value;
    setForm(prev => ({
      ...prev,
      [key]: newValue
    }));

    if (formError[key + "Err"]) {
      setFormError(prev => ({ ...prev, [key + "Err"]: "" }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.identifier.length < 3) {
      setFormError(prev => ({
        ...prev,
        identifierErr: "Логин не может быть меньше 3 символов"
      }));
    }
    if (form.password.length < 6) {
      setFormError(prev => ({
        ...prev,
        passwordErr: "Пароль не может быть меньше 6 символов"
      }));
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Logo />
      <h1 className={styles.formTitle}>Login</h1>
      <Input
        placeholder={"Логин или email"}
        type={"text"}
        name="identifier"
        onChange={handleChangeInput}
      />
      {formError.identifierErr && (
        <span className={styles.error}>{formError.identifierErr}</span>
      )}
      <Input
        placeholder={"Пароль"}
        type={"password"}
        name="password"
        onChange={handleChangeInput}
      />
      {formError.passwordErr && (
        <span className={styles.error}>{formError.passwordErr}</span>
      )}
      <Button text={"Войти"} type="submit" />
    </form>
  );
};

export default Login;
