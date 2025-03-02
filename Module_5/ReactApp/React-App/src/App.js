import "./App.css";
import RegistrationForm from "./Registr";
import LoginForm from "./Author";
const registration = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {registration ? (
          <LoginForm></LoginForm>
        ) : (
          <RegistrationForm></RegistrationForm>
        )}
      </header>
    </div>
  );
}

export default App;
