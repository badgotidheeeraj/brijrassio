import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1030 }}
      className="sb-topnav navbar navbar-expand navbar-dark bg-dark"
    >
      {/* Brand Link */}
      <Link className="navbar-brand ps-3" to="/dash-board">
        Start Bootstrap
      </Link>

      {/* Sidebar Toggle Button */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        onClick={onToggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Search Box */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>

      {/* User Dropdown */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">

          <Link
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <Link className="dropdown-item" to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/activity-log">
                Activity Log
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
