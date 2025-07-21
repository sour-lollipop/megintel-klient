import React from "react";
import { IoWalletOutline,IoJournalOutline,IoRepeatOutline,IoListOutline   } from "react-icons/io5";

const IncomeWallet = () => {
  return (
    <div className="wallet-card">
      <div className="wallet-header">
        <div className="wallet-title">
          <IoWalletOutline className="wallet-icon"/>
          Доходный кошелек
        </div>
        <div className="wallet-currency">KZT</div>
      </div>

      <div className="wallet-amount">35 000.00</div>

      <div className="wallet-actions">
        <div className="wallet-btn">
          <IoRepeatOutline  size={34} />
          <span>Перевод</span>
        </div>
        <div className="wallet-btn" >
          <IoJournalOutline size={34}  style={{ transform: 'rotate(-90deg)' }}/>
          <span style={{ width: '149px' }}>Вывод средств</span>
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
