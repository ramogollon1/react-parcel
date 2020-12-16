import React, { useState, useEffect } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);
    setUsuarios(users);
  };

  return (
    <ul>
      <p>{usuarios.id}</p>
      {usuarios.map((user, id) => (
        <li key={id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
