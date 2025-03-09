import "./App.css";
import RegistrationForm from "./components/authorization/Registr";
import LoginForm from "./components/authorization/Author";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
//q
const registration = 1;
const authorization = 1;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* {registration ? (
          <LoginForm></LoginForm>
        ) : (
          <RegistrationForm></RegistrationForm>
        )} */}
    </div>
  );
}

export default App;
