import "./Filters.css";
import Pagination from "../pagination/Pagination";
import { useReducer, useState, useEffect, useContext } from "react";
import filterReducer from "../reducer/filterReducer";
import Select from "./Select";
import { UsersContext } from "../context/context";
const initalState = {key: true}

export default function Filters() {
  const [state, dispatch] = useReducer(filterReducer, initalState);
  function handlerClick() {
    dispatch({type: 'resetKey'});
  }
  const [genres, setGenres] = useState([{id: 0, name: "Загрузка жанров..."}])
  const bearToken = useContext(UsersContext)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsIm5iZiI6MTY5MjI5MjE5NS4yNzIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLeEMAf7cur6RaKgMnUMw4RpVFf2SR6FaJp67acRPp8'
    }
  };

  console.log(bearToken)
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setGenres(res.genres)}
    )
    .catch(err => console.error(err));
  },[])

  return (
    <div className="Filters" key={state.key}>
      <div className="Filters-Header">
        <p>Фильтры</p>
        <button onClick={handlerClick}>X</button>
      </div>
      <main className="Filters-Main">
        <Select label={'Сортировать по:'} value={["Популярные по убыванию","Популярные по возрастанию"]}></Select>
        <Select label={'Год релиза:'} value={[2019,2020,2021]}></Select>
        <div className="Filters-genres">
          <p>Жанры</p>

          {genres.map((it) => {
            return <div>
            <label>
              <input type="radio"></input>
              {it.name}
            </label>
          </div>
          })}

        </div>
      </main>
      <Pagination></Pagination>
    </div>
  );
}
