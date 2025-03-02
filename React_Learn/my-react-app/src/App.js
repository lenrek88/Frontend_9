import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const AllTheRest = people.filter((person) => person.profession !== "chemist");

  const everyOneElse = (ar) => {
    return ar.map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  };

  const chemistList = everyOneElse(chemist);
  const AllTheRestList = everyOneElse(AllTheRest);

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{chemistList}</ul>
      <h2>All The Rest</h2>
      <ul>{AllTheRestList}</ul>
    </article>
  );
}
