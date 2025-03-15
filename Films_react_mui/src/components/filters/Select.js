export default function Select({label,value}) {
    return (
        <div className="Filters-Main">
        <label>{label}</label>
        <div></div>
        <select>
          {value.map((it) => {
            return <option>{it}</option>
          })}
        </select>
        </div>
       
    );
}