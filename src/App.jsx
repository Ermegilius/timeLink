import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const user = { name, email };
    console.log(user);

    // posting data to the server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Time Link</h1>
      <h3>The Numbers of Users: {users.length}</h3>
      <form className="flex-col gap-2 m-2" onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          id=""
          className="border border-slate-900"
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          className="border border-slate-900"
        />
        <br />
        <input
          type="submit"
          value="Add User"
          className="border border-slate-900 rounded-lg m-4 p-2 bg-black text-white"
        />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} | {user.name} | {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
