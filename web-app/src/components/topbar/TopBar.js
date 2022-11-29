import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const {user} = useContext(Context);
  return (
    <div className="top">
        <ul class="menu">
            <li className="menuItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li class="menuItem">
              <a href="https://fbschedules.com/2022-georgia-football-schedule/" className="link">
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