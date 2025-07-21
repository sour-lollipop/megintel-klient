import React from "react";
import { IoAddCircleOutline ,IoReceiptOutline ,IoBriefcaseOutline ,IoListOutline   } from "react-icons/io5";

const IncomeWallet = () => {
  return (
    <div className="wallet-card" style={{ background: 'linear-gradient(135deg, #6844F7, #758BFD)' }}>
      <div className="wallet-header">
        <div className="wallet-title">
          <IoBriefcaseOutline  className="wallet-icon"/>
          Рабочий кошелек
        </div>
        <div className="wallet-currency">KZT</div>
      </div>

      <div className="wallet-amount">35 000.00</div>

      <div className="wallet-actions">
        <div className="wallet-btn">
          <IoAddCircleOutline    size={34} />
          <span>Пополнение</span>
        </div>
        <div className="wallet-btn" >
          <IoReceiptOutline  size={34}  />
          <span>Списания</span>
        </div>
        <div className="wallet-btn">
          <IoListOutline  size={34} />
          <span>Операции</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeWallet;
