import "./Filters.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
export default function Filters() {
  const [resetState, setResetState] = useState(true);
  function handlerClick() {
    setResetState(!resetState);
  }
  return (
    <div className="Filters" key={resetState}>
      <div className="Filters-Header">
        <p>Фильтры</p>
        <button onClick={handlerClick}>X</button>
      </div>
      <main className="Filters-Main">
        <label>Сортировать по:</label>
        <select>
          <option>Популярности</option>
          <option>Не популярности</option>
        </select>
        <div className="Filters-genres">
          <p>Жанры</p>
          <div>
            <label>
              <input type="radio"></input>
              Комедия
            </label>
          </div>
          <div>
            <label>
              <input type="radio"></input>
              Боевик
            </label>
          </div>
          <div>
            <label>
              <input type="radio"></input>
              Драма
            </label>
          </div>
        </div>
      </main>
      <Pagination></Pagination>
    </div>
  );
}
