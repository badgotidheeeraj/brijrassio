import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ collapsed }) => {
  return (
    <div
      id="layoutSidenav_nav"
      style={{
        height: "calc(100vh - 56px)",
        position: "fixed",
        top: "56px",
        left: 0,
        width: collapsed ? "0" : "200px",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: "#343a40",
        color: "white",
        transition: "width 0.3s ease",
        zIndex: 1000,
      }}
    >
      {!collapsed && (
        <nav
          className="sb-sidenav accordion sb-sidenav-dark d-flex flex-column"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu p-3">
            <div className="nav flex-column">
              <div className="sb-sidenav-menu-heading text-uppercase small text-muted mb-2">
                Core
              </div>

              <Link className="nav-link d-flex align-items-center text-white mb-2" to="/dash-board">
                <i className="fas fa-tachometer-alt me-2"></i>
                <span>Dashboard</span>
              </Link>

              <div className="sb-sidenav-menu-heading text-uppercase small text-muted mt-4 mb-2">
                Menu
              </div>

              <Link className="nav-link d-flex align-items-center text-white mb-2" to="/add-item">
                <i className="fas fa-plus-circle me-2"></i>
                <span>Add Item</span>
              </Link>

              <Link className="nav-link d-flex align-items-center text-white mb-2" to="/show-menu">
                <i className="fas fa-list me-2"></i>
                <span>Listed Items</span>
              </Link>
            </div>
          </div>

          <div className="sb-sidenav-footer mt-auto bg-dark text-center py-3">
            <div className="small text-muted">Logged in as:</div>
            <strong>Start Bootstrap</strong>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
