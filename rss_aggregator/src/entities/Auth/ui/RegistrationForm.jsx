import { useState } from "react";
import { useCreateRegisterUser } from "@/entities/Auth/api/hooks";
import Input from "@/shared/UI/Input";
import styles from "./Auth.module.css";
import Button from "@/shared/UI/Button";
import Logo from "@/shared/UI/Logo";
import Loading from "@/shared/UI/Loading";
import Error from "@/shared/UI/Error";
import { Link } from "react-router";

const Registration = () => {
  const {
    mutate: register,
    isLoading,
    isError,
    error
  } = useCreateRegisterUser();

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

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));

    const errorKey = name + "Err";
    if (formError[name + "Err"]) {
      setFormError(prev => ({ ...prev, [errorKey]: "" }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.email.includes("@") && form.password && form.login.length > 3) {
      register({
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
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
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
      <Link className={styles.redirectLink} to={"/Login"}>
        Have an account? Login
      </Link>
      <Button text={"Registration"} type="submit" />
    </form>
  );
};

export default Registration;
