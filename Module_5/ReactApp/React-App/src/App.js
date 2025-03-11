import "./App.css";
import RegistrationForm from "./Registr";
import LoginForm from "./Author";
import Box from '@mui/material/Box';
import { extendTheme, TextField } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";
const registration = 1;

function App() {

    const [text, setText] = useState('')
  function buttonHandler(e) {
    alert(text)
  }
  function changeHandler(e) {
    setText(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        {registration ? (
          <LoginForm></LoginForm>
        ) : (
          <RegistrationForm></RegistrationForm>
        )}
        <Box><TextField onChange={changeHandler} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button onClick={buttonHandler} variant="contained">Contained</Button>

        </Box>
      </header>
    </div>
  );
}

export default App;
