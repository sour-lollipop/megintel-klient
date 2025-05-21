import React from "react";
import men from '../images/man.png'

export const Userinfo = () => {
  return (
    <div className="userInfo">
      <div className="cartoon">
        <div className="circle"></div>
        <img src={men} alt="man" className="img" />
      </div>
      <p className="role">Менеджер</p>
      <h3>Тагир Бекбетулы</h3>
      <p className="phone">+7 777 000-00-00</p>
      <p className="tariff">Единый тариф</p>
      <div className="linkBox">
        <span>https://demo.megitel.connect/</span>
        <img src="/copy-icon.svg" alt="copy" />
      </div>
      <p className="ref">Ваша реферальная ссылка</p>
    </div>
  );
};


export default Userinfo;
// /33333333