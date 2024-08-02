import React, { useState } from "react";

interface ToggleButtonProps {
  icon: React.ReactNode;
  name: string;
  onToggle: (isOn: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  icon,
  name,
  onToggle,
}) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
    onToggle(newIsOn);
  };

  return (
    <button
    type="button"
      onClick={handleToggle}
      style={{
        width: "250px",
        height: "60px",
        border: "1px solid black",
        backgroundColor: isOn ? "#42a7f5" : "white",
        color: isOn ? "white" : "black",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
      <p style={{ margin: 0 }}>{name}</p>
    </button>
  );
};

export default ToggleButton;
