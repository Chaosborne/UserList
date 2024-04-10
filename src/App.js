import React, { useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Here's the list of users: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Users loading error");
      });
  }, []);

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
