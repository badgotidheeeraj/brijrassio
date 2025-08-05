import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div>
      {/* Top Navbar with toggle button */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1030 }}>
        <Navbar onToggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar and main content */}
      <div style={{ display: "flex", marginTop: "56px" }}>
        <Sidebar collapsed={collapsed} />

        <main
          style={{
            marginLeft: collapsed ? "0" : "250px",
            padding: "20px",
            width: "100%",
            backgroundColor: "#f8f9fa",
            minHeight: "calc(100vh - 56px)",
            transition: "margin-left 0.3s ease",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
