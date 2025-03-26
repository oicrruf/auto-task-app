import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ventas"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ventas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clientes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dte"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              DTE
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
