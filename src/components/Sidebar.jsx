import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/Sidebar.css'



const Sidebar = () => {
  const [openManagement, setOpenManagement] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive ? "link-box active" : "link-box";

  return (
    <div className="sidebar-container">
      <div className="logo">
        {/* <img src={logo} alt="" /> */}
        <h2>Arari Sport</h2>
      </div>

      <nav className="navbar-menu">

        <NavLink className={activeLink}>
          Dashboard
        </NavLink>

        <NavLink className={activeLink}>
          Booking
        </NavLink>


        {/* MANAGEMENT */}
        <div>
          <div
            className="link-box"
            onClick={() => setOpenManagement(!openManagement)}
          >
            Management
          </div>

          {openManagement && (
            <div className="submenu">
              <NavLink to="/admin/sport" className={activeLink}>
                Sport
              </NavLink>

              <NavLink to="/admin/court" className={activeLink}>
                Court
              </NavLink>

              <NavLink to="/admin/operating-hours" className={activeLink}>
                Operating Hours
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/admin/customer" className={activeLink}>
          Customer
        </NavLink>

        <NavLink to="/admin/analytics" className={activeLink}>
           Analytics
        </NavLink>

        <NavLink to="/admin/settings" className={activeLink}>
           Settings
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
