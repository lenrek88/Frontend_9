import { Box, Typography } from "@mui/material";
import AddTask from "../addTask/AddTask";
import Plan from "../plan/Plan";
import Done from "../done/Done";
export default function Todo() {
  return (
    <Box
      backgroundColor="white"
      boxSizing={"border-box"}
      width={"514px"}
      height={"766px"}
      borderRadius={"15px"}
      padding={"32px"}
    >
      <Typography align="left" variant="h4" color="#2196F3">
        TODO
      </Typography>
      <AddTask></AddTask>
      <Plan></Plan>
      <Done></Done>
    </Box>
  );
}
