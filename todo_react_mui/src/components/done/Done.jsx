import { Typography } from "@mui/material";
import Task from "../task/Task";
import { Box } from "@mui/material";
import { useTask, useTaskDispatch } from "../../context/TaskContext";
export default function Done() {
  const tasks1 = useTask();
  const lengthDone = tasks1.filter((it) => it.done === true).length;
  return (
    <Box flexDirection={"column-reverse"}>
      {lengthDone > 0 ? (
        <Typography color="gray" varint="button">
          Готово ({lengthDone})
        </Typography>
      ) : null}
      {tasks1.map((task) => {
        if (task.done) {
          return <Task key={task.id} task={task} />;
        } else {
          return <></>;
        }
      })}
    </Box>
  );
}
