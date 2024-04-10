import React, { useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Here's the list of users: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Users loading error");
      })
      .finally(() => {
        setIsLoading(false);
        console.log();
      });
  }, []);

  return (
    <div className="App">
      {/* <Users /> is a ./components/Users/User.index.jsx/Users component */}
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
