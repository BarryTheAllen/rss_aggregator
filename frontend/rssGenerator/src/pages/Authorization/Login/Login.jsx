import Input from "@/shared/UI/Input";
import styles from "./Login.module.css";
import Button from "@/shared/UI/Button";
import Logo from "@/shared/UI/Logo";
import { useState } from "react";
import { useLoginUser } from "@/entities/api";
import Error from "@/shared/UI/Error";
import Loading from "@/shared/UI/Loading";
import { Link } from "react-router";

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

  const { mutate, isError, error, isLoading } = useLoginUser();

  const handleSubmit = e => {
    e.preventDefault();
    mutate({
      identifier: form.identifier,
      password: form.password
    });
  };
  if (isError) {
    return (
      <Error
        errorCode={error.response?.status}
        errorText={"Ошибка входа попробуйте еще раз"}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }
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
      <Link className={styles.redirectLink} to={"/Registration"}>
        Dont have an account? Registration.
      </Link>
      <Button text={"Login"} type="submit" />
    </form>
  );
};

export default Login;
