import "./header.css";

export default function Header() {
  function HeaderButtonHandler() {}
  return (
    <>
      <div className="Header-Block">
        <p>Фильмы</p>
        <button onClick={HeaderButtonHandler}>Войти</button>
      </div>
      <hr></hr>
    </>
  );
}
