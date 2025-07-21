// Sidebar.tsx
import React from "react";
import {
  IoPersonCircleOutline,
  IoWalletOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

import logo from "../images/logo.png";
import support from "../images/support.svg";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="up">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <Link to="/" className={`button ${isActive("/") ? "active" : ""}`}>
          <IoPersonCircleOutline size={35} />
          <p>Профиль</p>
        </Link>

        <Link to="/finance" className={`button ${isActive("/finance") ? "active" : ""}`}>
          <IoWalletOutline size={35} />
          <p>Финансы</p>
        </Link>

        <Link to="/team" className={`button ${isActive("/team") ? "active" : ""}`}>
          <IoPeopleOutline size={35} />
          <p>Команда</p>
        </Link>

        <Link to="/settings" className={`button ${isActive("/settings") ? "active" : ""}`}>
          <IoSettingsOutline size={35} />
          <p>Настройки</p>
        </Link>

        <Link to="/support" className={`button ${isActive("/support") ? "active" : ""}`}>
          <img src={support} alt="support" />
          <p>Поддержка</p>
        </Link>
      </div>

      <div className="button logout">
        <IoLogOutOutline size={35} />
        <p>Выход</p>
      </div>
    </div>
  );
};

export default Sidebar;
