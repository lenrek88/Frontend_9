import { Checkbox, Box, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { useTask, useTaskDispatch } from "../../context/TaskContext";
import { useState } from "react";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTaskDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Box height={40} width={450} display="flex">
          <TextField
            id="input-with-sx"
            label="Имя задачи"
            variant="standard"
            sx={{ width: "100%", height: "40px" }}
            value={task.text}
            onChange={(e) => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  text: e.target.value,
                },
              });
            }}
          ></TextField>
          <IconButton onClick={() => setIsEditing(false)}>
            <CheckIcon sx={{ color: "#2196F3" }} />
          </IconButton>
        </Box>
      </>
    );
  } else {
    taskContent = (
      <>
        <Box
          height={40}
          width={450}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Checkbox
            checked={task.done}
            onChange={(e) => {
              dispatch({
                type: "changed",
                task: {
                  ...task,
                  done: e.target.checked,
                },
              });
            }}
          />
          <Typography color="black" width={400}>
            {task.text}
          </Typography>
          <IconButton
            sx={{ color: "#2196F3" }}
            onClick={(e) => {
              setIsEditing(!isEditing);
            }}
          >
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton
            sx={{ color: "orange" }}
            onClick={(e) => {
              dispatch({
                type: "deleted",
                id: task.id,
              });
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Box>
      </>
    );
  }

  return <>{taskContent}</>;
}
