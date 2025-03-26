import React from "react";
import "./Layout.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Auto Task</div>
      <div className="user-info">
        <span className="user-name">Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
