import Input from "@/UI/Input";
import styles from "./Login.module.css";
import Button from "@/UI/Button";
import Logo from "@/UI/Logo";
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

  console.log(form);

  const handleChangeInput = e => {
    const key = e.target.name;
    const newValue = e.target.value;
    setForm(prev => ({
      ...prev,
      [key]: newValue
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { identifierErr: "", passwordErr: "" };

    if (!form.identifier.trim()) {
      newErrors.identifierErr = "Поле обязательно для заполнения";
      hasError = true;
    } else if (form.identifier.length < 3) {
      newErrors.identifierErr = "Логин не может быть меньше 3 символов";
      hasError = true;
    }

    if (!form.password.trim()) {
      newErrors.passwordErr = "Поле обязательно для заполнения";
      hasError = true;
    } else if (form.password.length < 6) {
      newErrors.passwordErr = "Пароль не может быть меньше 6 символов";
      hasError = true;
    }

    if (hasError) {
      setFormError(newErrors);
      return;
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Logo />
      <Input
        placeholder={"Логин или email"}
        type={"text"}
        name="identifier"
        required
        onChange={handleChangeInput}
      />
      {formError.identifierErr}
      <Input
        placeholder={"Пароль"}
        type={"password"}
        name="password"
        required
        onChange={handleChangeInput}
      />
      {formError.passwordErr}
      <Button text={"Войти"} type="submit" />
    </form>
  );
};

export default Login;
