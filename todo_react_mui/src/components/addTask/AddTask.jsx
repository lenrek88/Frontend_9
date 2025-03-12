import { TextField, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useTaskDispatch } from "../../context/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  return (
    <Box display={"flex"} alignItems={"flex-end"} mt={"20px"} mb={"24px"}>
      <TextField
        id="input-with-sx"
        label="Имя новой задачи"
        variant="standard"
        sx={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton
        sx={{ color: "#2196F3" }}
        onClick={(e) => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        <AddIcon></AddIcon>
      </IconButton>
    </Box>
  );
}

let nextId = 4;
