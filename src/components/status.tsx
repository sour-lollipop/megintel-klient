import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { HiOutlineDatabase,HiOutlineCheckCircle  } from "react-icons/hi";
import Circle from "./SemiCircleProgress"
export const Status = () => {
  return (
    <div className="status">
      <div className="status__header">
        <h3>Так держать, Тагир! <IoRocketOutline /></h3>
        <p>Ваш текущий ранг: <strong>Менеджер</strong></p>
      </div>

      <div className="status__body">
        
<Circle percentage={67} />

        <div className="info">
          <div className="info__item">
            <span><FiUsers /></span>
            <p>Ваша команда: 9 человек</p>
          </div>
          <div className="info__item">
            <span><HiOutlineDatabase /></span>
            <p>Доход в день: 2 500 KZT</p>
          </div>
          <div className="info__item">
            <span><HiOutlineCheckCircle /></span>
            <p>Ваш статус: Активный</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
