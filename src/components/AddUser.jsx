import { useState } from "react";

function AddUser({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Name and Email are required!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      company: { name: "Local User" },
    };

    onAddUser(newUser);

    setName("");
    setEmail("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-4 shadow-sm mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h3 className="mb-3 text-center">Add User</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Add
      </button>
    </form>
  );
}

export default AddUser;