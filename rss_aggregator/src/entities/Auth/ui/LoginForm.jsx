import Input from "@/shared/UI/Input";
import styles from "./Auth.module.css";
import Button from "@/shared/UI/Button";
import Logo from "@/shared/UI/Logo";
import { useState } from "react";
import { useLoginUser } from "@/entities/Auth/api/hooks";
import Error from "@/shared/UI/Error";
import Loading from "@/shared/UI/Loading";
import { Link } from "react-router";

const Login = () => {
  const { mutate: login, isError, error, isLoading } = useLoginUser();

  const [form, setForm] = useState({
    identifier: "",
    password: ""
  });
  const [formError, setFormError] = useState({
    identifierErr: "",
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
    login({
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
