import { useEffect, useState } from "react";

const genderInit = {
  name: "Name",
  gender: "Male/Female",
};

const URL = {
  GENDER: "https://api.genderize.io",
};

export default function Genderize() {
  const [gender, setGender] = useState(genderInit);
  const [textInput, setTextInput] = useState("");
  function handlerInput(e) {
    setTextInput(e.target.value);
  }
  function alertGender(e) {
    e.preventDefault();
    const url = `${URL.GENDER}?name=${textInput}`;
    fetch(url)
      .then((response) => response.json())
      .then((units) => {
        console.log(units);
        if (units.gender === "male" || units.gender === "female") {
          setGender({ name: textInput, gender: units.gender });
        } else {
          setGender({ ...gender, gender: "error =<" });
        }
      });
  }

  return (
    <div
      style={{ width: "500px", height: "300px", backgroundColor: "#61dafb" }}
    >
      <form onSubmit={(e) => alertGender(e)}>
        <h3>input your name</h3>
        <p></p>
        <input
          onChange={handlerInput}
          value={textInput}
          style={{ width: "300px", height: "30px" }}
          type="text"
        ></input>
        <p>
          {gender.name} is {gender.gender}{" "}
        </p>
      </form>
    </div>
  );
}
