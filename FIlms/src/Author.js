import FormUI from "./UI/FormUi";
import { useState } from "react";

const initialCredentials = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const [credentials, setCredentials] = useState(initialCredentials);

  function changePassword(password) {
    setCredentials({ ...credentials, password: password });
  }

  function changeEmail(email) {
    setCredentials({ ...credentials, email: email });
  }

  function onSubmit(value) {
    value.preventDefault();
    console.log(`Пользователь успешно авторизован
            Логин: ${credentials.email}
            Пароль: ${credentials.password}`);
    setCredentials(initialCredentials);
  }
  return (
    <FormUI
      hText={"Login Form"}
      butText={"Login"}
      credentials={credentials}
      changePassword={changePassword}
      changeEmail={changeEmail}
      onSubmit={onSubmit}
    ></FormUI>
  );
}
