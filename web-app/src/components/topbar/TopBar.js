import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const {user, dis} = useContext(Context);
  const handleLogout = () => {
    dis({type: "LOGOUT"});
  }

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
            {!user && <li class="menuItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
            }
            <li class="menuItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            {user && <li className="menuItem" onClick={handleLogout}>Logout</li>}
        </ul>
    </div>
  );
}