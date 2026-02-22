import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetails({ users }) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = users.find((u) => u.id.toString() === id);
    if (localUser) {
      setUser(localUser);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id, users]);

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto p-4" style={{ maxWidth: "500px" }}>
        <h2 className="card-title text-center mb-3">{user.name}</h2>
        <ul className="list-group list-group-flush">
  
          <li className="list-group-item">
            <strong>Phone:</strong> {user.phone}
          </li>
          <li className="list-group-item">
            <strong>Website:</strong> {user.website}
          </li>
          <li className="list-group-item">
            <strong>City:</strong> {user.address?.city || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;