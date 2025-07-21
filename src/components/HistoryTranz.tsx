import React from "react";
import men from '../images/man.png'
import { IoWalletOutline, IoBriefcaseOutline   } from "react-icons/io5";

export const HistoryTranz = () => {
  return (
    <div className="historyTranz">
      <div className="list">

       <div className="data">
        <p className="time">19:15</p>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className="icon" style={{backgroundColor: '#FF9500',}}>
            <IoWalletOutline/>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className="score">+ 900.00 KZT</p>
            <p className="desc">пополнение</p>
          </div>
        </div>
       </div>

        <div className="data">
        <p className="time">19:15</p>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className="icon" style={{backgroundColor: '#FF9500',}}>
            <IoWalletOutline/>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className="score">+ 900.00 KZT</p>
            <p className="desc">пополнение</p>
          </div>
        </div>
       </div>

        <div className="data">
        <p className="time">19:15</p>
        <div style={{display: 'flex', gap: '10px'}}>
          <div className="icon" style={{backgroundColor: '#758BFD',}}>
            <IoBriefcaseOutline/>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className="score">+ 900.00 KZT</p>
            <p className="desc">пополнение</p>
          </div>
        </div>
       </div>


      </div>
      <a className="ref" href="#">Посмотреть все операции</a>
    </div>
  );
};


export default HistoryTranz;
// /33333333