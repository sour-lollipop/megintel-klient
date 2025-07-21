import React from "react";

const CircleProgressCustom = ({ percentage = 67 }) => {
  const radius = 45;
  const strokeWidth = 10;
  const center = 60;
  const circumference = 2 * Math.PI * radius;
  const arcPortion = 0.8; // 80% круга
  const arcLength = circumference * arcPortion;
  const gapLength = circumference * (1 - arcPortion);
  const offset = arcLength * (1 - percentage / 100) + gapLength / 2;

  return (
    <div style={{ width: "200px", height: "200px", position: "relative" }}>
      <svg width="100%" height="100%" viewBox="0 0 120 120">
        {/* Фоновая дуга */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#FFE4BA"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={gapLength / 2}
          strokeLinecap="round"
          transform="rotate(145, 60, 60)" // поворот так, чтобы разрыв был внизу
        />
        {/* Основная дуга */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#FF8A00"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(145, 60, 60)" // поворот тоже применяем
        />
      </svg>

      {/* Текст */}
      <div
        style={{
          position: "absolute",
        
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ color: "#FF8A00", fontWeight: "bold", fontSize: "18px", lineHeight: "24px",marginBottom: "4px" }}>
          Старший<br />менеджер
        </div>
        <div style={{ fontSize: "30px", fontWeight: "bold", color: "#0B0F22", marginTop: "4px" }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CircleProgressCustom;
