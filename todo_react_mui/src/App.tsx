import "./App.css";
import Box from "@mui/material/Box";
import Todo from "./components/todo/Todo";
import {TaskProvider} from './context/TaskContext'

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"gray"}
          minHeight={"100vh"}
        >
          <Todo></Todo>
        </Box>
      </TaskProvider>
    </div>
  );
}

export default App;
