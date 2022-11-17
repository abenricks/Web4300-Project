import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
        {/*Links need to be added or open components through router maybe*/}
        <ul class="menu">
            <li class="menuItem">Home</li>
            <li class="menuItem">About</li>
            <li class="menuItem">Football Schedule</li>
            <li class="menuItem">Contact</li>
            <li class="menuItem">Login</li>
        </ul>
    </div>
  );
}