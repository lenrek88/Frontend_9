import FormUI from "./UI/FormUi";
import { useState } from "react";

const initialCredentials = {
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const [credentials, setCredentials] = useState(initialCredentials);

  function changePassword(password) {
    setCredentials({ ...credentials, password: password });
  }

  function changeEmail(email) {
    setCredentials({ ...credentials, email: email });
  }

  function onSubmit(value) {
    value.preventDefault();
    console.log(`Пользователь успешно зарегестрирован
            Логин: ${credentials.email}
            Пароль: ${credentials.password}`);
    setCredentials(initialCredentials);
  }

  return (
    <FormUI
      hText={"Registration Form"}
      butText={"Registration"}
      credentials={credentials}
      changePassword={changePassword}
      changeEmail={changeEmail}
      onSubmit={onSubmit}
    ></FormUI>
  );
}
