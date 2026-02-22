import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
<div>
          <div className="card h-100 ">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{user.name}</h5>

          <p className="card-text mb-2">
            {user.email}
          </p>

          <p className="card-text mb-3">
            <strong>{user.company?.name ?? "—"}</strong>
          </p>

          <Link
            to={`/user/${user.id}`}
            className="btn btn-primary mt-auto"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;