import { useState } from "react";
import { useCreateRegisterUser } from "@/shared/api/";
import Input from "@/shared/UI/Input";
import styles from "./Registration.module.css";
import Button from "@/shared/UI/Button";
import Logo from "@/shared/UI/Logo";
import Loading from "@/shared/UI/Loading";
import Error from "@/shared/UI/Error";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    login: "",
    password: ""
  });
  const [formError, setFormError] = useState({
    emailErr: "",
    loginErr: "",
    passwordErr: ""
  });

  const { mutate, isLoading, isError, error } = useCreateRegisterUser();

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
    if (form.email.includes("@") && form.password && form.login.length > 3) {
      mutate({
        username: form.login,
        email: form.email,
        password: form.password
      });
    }
    if (form.login?.length < 3 && !form.email?.includes("@")) {
      setFormError(prev => ({
        ...prev,
        loginErr: "Логин не может быть меньше 3 символов",
        emailErr: "почта должна содержать @"
      }));
    }
    if (form.password.length < 6) {
      setFormError(prev => ({
        ...prev,
        passwordErr: "Пароль не может быть меньше 6 символов"
      }));
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error
        errorCode={error.response?.status}
        errorText={"Ошибка регистрации попробуйте еще раз"}
      />
    );
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Logo />
      <h1 className={styles.formTitle}>Registration</h1>
      <Input
        placeholder={"email"}
        type={"email"}
        name="email"
        onChange={handleChangeInput}
      />
      {formError.emailErr && (
        <span className={styles.error}>{formError.emailErr}</span>
      )}
      <Input
        placeholder={"Логин"}
        type={"text"}
        name="login"
        onChange={handleChangeInput}
      />
      {formError.loginErr && (
        <span className={styles.error}>{formError.loginErr}</span>
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

export default Registration;
