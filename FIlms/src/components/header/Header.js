import "./header.css";

export default function Header() {
  function HeaderButtonHandler() {}
  return (
    <div style={{ marginBottom: "24px" }}>
      <div className="Header-Block">
        <p>Фильмы</p>
        <button onClick={HeaderButtonHandler}>Войти</button>
      </div>
      <hr></hr>
    </div>
  );
}
