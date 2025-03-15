import "./Filters.css";
import Pagination from "../pagination/Pagination";
import { useReducer, useState, useEffect, useContext } from "react";
import { TextField, Box, IconButton, Typography, Paper, Autocomplete} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import filterReducer from "../reducer/filterReducer";
import Select from "./Select";
import {
  UsersContext,
  StoreContext,
  StoreDispatchContext,
} from "../context/context";
const initalState = { key: true };

export default function Filters() {
  const store = useContext(StoreContext);
  const dispatch = useContext(StoreDispatchContext);

  function handlerClick() {
    dispatch({ type: "resetKey" });
  }
  const [genres, setGenres] = useState([{ id: 0, name: "Загрузка жанров..." }]);
  const bearToken = useContext(UsersContext);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsIm5iZiI6MTY5MjI5MjE5NS4yNzIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLeEMAf7cur6RaKgMnUMw4RpVFf2SR6FaJp67acRPp8",
    },
  };

  console.log(bearToken);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=ru", options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setGenres(res.genres);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(store.filters.key);
  return (
    <Paper display={'flex'}>
      <Box>
      <Typography>Фильтры</Typography>
      <IconButton>
      <ClearIcon></ClearIcon>
      </IconButton>
      </Box>
      <Box>
      <Select
          label={"Сортировать по:"}
          value={["Популярные по убыванию", "Популярные по возрастанию"]}
        ></Select>
<Autocomplete
  multiple // необходимое условие для множественного выбора
  options={genres}
  disableCloseOnSelect // это нам пригодится дальше
  ></Autocomplete>
      </Box>
       
<Box>
<Typography>Жанры</Typography>
</Box>

          {genres.map((it) => {
            return (
              <div>
                <label>
                  <input type="radio"></input>
                  {it.name}
                </label>
              </div>
            );
          })}
       
      <Pagination></Pagination>
    </Paper>

  );
}
