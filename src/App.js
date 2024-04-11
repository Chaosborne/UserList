import React, { useState } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// Here's the list of users: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Users loading error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} searchValue={searchValue} changeSearchValue={changeSearchValue} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
