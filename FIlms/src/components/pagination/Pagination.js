import "./pagination.css";
export default function Pagination() {
  const pagAr = ["<", "1", "2", "3", "4", "5", ">"];
  return (
    <div className="Pagination">
      <ul>
        {pagAr.map((it) => (
          <button key={it}>{it}</button>
        ))}
      </ul>
    </div>
  );
}
