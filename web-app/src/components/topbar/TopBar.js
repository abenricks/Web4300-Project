import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
        <ul class="menu">
            <li class="menuItem">
              <Link to="/">
                Home
              </Link>
            </li>
            <li class="menuItem">
              <a href="https://fbschedules.com/2022-georgia-football-schedule/">
                Football Schedule
              </a>
            </li>
            {!user && <li class="menuItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>}
            <li class="menuItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
            <li class="menuItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            {user && <li className="menuItem">Logout</li>}
        </ul>
    </div>
  );
}