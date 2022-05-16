import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
export default function Connections() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <i className="nav-link active" id="users">
          Xin Chào: {user.email}
        </i>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link active" onClick={LogOut}>
          LOGOUT
        </Link>
      </li>
    </ul>
  );
}
