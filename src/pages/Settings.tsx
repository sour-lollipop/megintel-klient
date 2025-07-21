import React from "react";
import Promo1 from "../components/Promo1"
import Status from "../components/status";
import IncomeWallet from "../components/IncomeWallet";
import JobWallet from "../components/JobWallet";
import PromoCarousel from "../components/PromoCarousel";



export const Settings = () => {
  return (
    <div className="page">
      
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <IncomeWallet />
        <JobWallet />
      </div>

      <PromoCarousel />

    </div>
  );
};

export default Settings;
