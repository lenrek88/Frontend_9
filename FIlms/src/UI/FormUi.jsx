function Button({ children }) {
  return (
    <div className="LogButton">
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          width: "500px",
          height: "100px",
          marginTop: "50px",
        }}
      >
        {children}
      </button>
    </div>
  );
}

function Input({ placeHolderProps, value, changeValue }) {
  return (
    <div className="inputText">
      <input
        style={{
          width: "500px",
          height: "50px",
          fontSize: "25px",
          border: "none",
          borderBottom: "2px solid blue",
          marginBottom: "25px",
        }}
        type="text"
        placeholder={placeHolderProps}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      ></input>
    </div>
  );
}

export default function FormUI({
  hText,
  butText,
  buttonHandler,
  login,
  password,
  changeEmail,
  changePassword,
  onSubmit,
}) {
  return (
    <div
      style={{
        marginTop: "50px",
        width: "700px",
        height: "550px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <h3>{hText}</h3>
        <Input
          placeHolderProps={"Username"}
          value={login}
          changeValue={changeEmail}
        ></Input>
        <Input
          placeHolderProps={"Password"}
          value={password}
          changeValue={changePassword}
        ></Input>
        <Button>{butText}</Button>
      </form>
    </div>
  );
}
