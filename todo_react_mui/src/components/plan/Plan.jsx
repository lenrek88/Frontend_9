import { Typography } from "@mui/material";
import Task from "../task/Task";
import { Box } from "@mui/material";
import { useTask, useTaskDispatch } from "../../context/TaskContext";
export default function Plan() {
  const tasks = useTask();
  const lengthPlan = tasks.filter((it) => it.done === false).length;
  return (
    <Box flexDirection={"column"}>
      {lengthPlan > 0 ? (
        <Typography color="gray" varint="button">
          План ({lengthPlan})
        </Typography>
      ) : null}
      {tasks.reverse().map((task) => {
        if (task.done) {
          return <></>;
        } else {
          return <Task key={task.id} task={task} />;
        }
      })}
    </Box>
  );
}
