import { useState } from "react";

function Person() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const { email, name } = user;

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //console.log(user);

  return (
    <div>
      <p>
        {name} | {email}
      </p>
      <p>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleInput}
        />
      </p>
      <p>
        <input
          type="email"
          placeholder="email"
          value={email}
          name="email"
          onChange={handleInput}
        />
      </p>
    </div>
  );
}

export default Person;
