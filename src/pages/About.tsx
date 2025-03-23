import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
function About() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  function increase() {
    // count = count + 1;
    setCount((count) => count + 1);
    // console.log(count);
  }
  function decrease() {
    // count = count - 1;
    setCount((count) => count - 1);
    // console.log(count);
  }

  useEffect(() => {
    console.log("Render compnent once");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>About Page </h1>
      <Link to="/">Home</Link>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={decrease}>Decrease -</button>
        <button onClick={increase}>Increase +</button>
      </div>

      <h2>Users:</h2>
      {users.map((user) => {
        return (
          <div>
            <h3>ID: {user.id}</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>Website: {user.website}</p>
          </div>
        );
      })}
    </div>
  );
}

export default About;
