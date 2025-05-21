import React from "react";


import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search">
        <FiSearch size={24} />
        <input type="text" placeholder="Поиск" />
      </div>
      <p>Главная</p>
      <p>Q&A</p>
      <p>Контакты</p>
      <div className="pushes">
        <IoIosNotificationsOutline size={24} />
        <p>Уведомления</p>
      </div>
      <div className="language">
      <p>Язык:</p>
        <select name="language" id="language">
          <option value="ru">Русс</option>
          <option value="en">Eng</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
