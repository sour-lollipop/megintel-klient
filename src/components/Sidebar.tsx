import React from "react";
import {
  IoPersonCircleOutline,
  IoWalletOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import logo from "../images/logo.png";
import support from "../images/support.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="up">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="button">
          <IoPersonCircleOutline size={35} />

          <p>Профиль</p>
        </div>

        <div className="button">
          <IoWalletOutline size={35} />
          <p>Финансы</p>
        </div>

        <div className="button">
          <IoPeopleOutline size={35} />
          <p>Команда</p>
        </div>

        <div className="button">
          <IoSettingsOutline size={35} />
          <p>Настройки</p>
        </div>

        <div className="button">
          <img src={support} alt="support" />
          <p>Поддержка</p>
        </div>
      </div>

      <div className="button">
        <IoLogOutOutline size={35} />
        <p>Выход</p>
      </div>
    </div>
  );
};

export default Sidebar;
