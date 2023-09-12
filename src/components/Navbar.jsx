import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  BiSolidDashboard,
  BiSolidPurchaseTag,
  BiSolidCart,
  BiSolidUser,
  BiLogOut,
} from "react-icons/bi";

function Navbar() {
  return (
    <aside className="nav-container">
      <div>
        <h2 className="logo-title">Dopios.</h2>
        <ul>
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              <BiSolidDashboard className="nav-icon" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/products`} className="nav-link">
              <BiSolidPurchaseTag className="nav-icon" />
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/orders`} className="nav-link">
              <BiSolidCart className="nav-icon" />
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/users`} className="nav-link">
              <BiSolidUser className="nav-icon" />
              Users
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-logout">
        <NavLink to={`/logout`} className="nav-link">
          <BiLogOut className="nav-icon" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}

export default Navbar;
