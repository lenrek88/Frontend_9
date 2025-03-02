import { recipes } from "./data.js";

function Recipe({ id, name, ingredient }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredient.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          id={recipe.id}
          name={recipe.name}
          ingredient={recipe.ingredients}
        ></Recipe>
      ))}
    </div>
  );
}
