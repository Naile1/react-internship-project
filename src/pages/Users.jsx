import { useState } from "react";
import AddUser from "../components/AddUser";
import UserCard from "../components/UserCard";

function Users({ users, setUsers }) {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const q = search.trim().toLowerCase();

  const filteredUsers = q
    ? users.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      )
    : users;

  const handleAddUser = (newUser) => {
    const userToInsert = {
      id: Date.now(),
      name: newUser.name?.trim(),
      email: newUser.email?.trim(),
      company: { name: "Local User" },
    };

    setUsers((prev) => [userToInsert, ...prev]);
    setShowForm(false);
    setSearch("");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Users</h3>

      <div className="d-flex flex-column flex-md-row gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={() => setShowForm((p) => !p)}
        >
          {showForm ? "Close" : "+ Add User"}
        </button>
      </div>

      {showForm && (
        <div className="card mb-3">
          <div className="card-body">
            <AddUser onAddUser={handleAddUser} />
          </div>
        </div>
      )}

  <div className="row g-3">
  {filteredUsers.map((user) => (
    <div
      key={user.id}
      className={
        filteredUsers.length === 1
          ? "col-12"
          : "col-12 col-md-6 col-lg-4"
      }
    >
      <UserCard user={user} />
    </div>
  ))}

  {!filteredUsers.length && (
    <div className="col-12 text-center text-muted py-4">
      No users found.
    </div>
  )}
</div>
    </div>
  );
}

export default Users;