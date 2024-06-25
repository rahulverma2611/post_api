// import logo from './logo.svg';
import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function addUser() {
    console.log(name, email, phone);
    const user = { name, email, phone };
    // fetch("http://localhost:3000/users", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // }).then((resp) => {
    //   console.log("response", resp);
    // });

    axios
      .post("http://localhost:3000/users", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((save) => {
        console.log("result:", save);
      });
  }

  return (
    <div className="app">
      <h2>post api practice</h2>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="name"
      />{" "}
      <br /> <br />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
      />{" "}
      <br /> <br />
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type="phone"
      />{" "}
      <br /> <br />
      <button onClick={addUser} type="submit">
        save user detail
      </button>
    </div>
  );
}

export default App;
