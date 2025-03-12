import "./App.css";
import RegistrationForm from "./components/authorization/Registr";
import LoginForm from "./components/authorization/Author";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { UsersContext } from "./components/context/context";
const registration = 1;
const authorization = 1;
function App() {
  const bearToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsIm5iZiI6MTY5MjI5MjE5NS4yNzIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLeEMAf7cur6RaKgMnUMw4RpVFf2SR6FaJp67acRPp8";

  return (
    <div className="App">
      <Header></Header>
      <UsersContext value={bearToken}>
        <Main></Main>
      </UsersContext>
      {/* {registration ? (
          <LoginForm></LoginForm>
        ) : (
          <RegistrationForm></RegistrationForm>
        )} */}
    </div>
  );
}

export default App;
