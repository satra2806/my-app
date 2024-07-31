// src/ButtonGroup.js
import React, { useState } from 'react';
import './ButtonGroup.css';

interface IButtonGroupProps {
  setIsEditable: (isEditable: boolean) => void;
  isEditable: boolean;
  buttonDisplay: Array<string>;
}

const ButtonGroup = ({ setIsEditable, isEditable, buttonDisplay }: IButtonGroupProps) => {
  const [activeButton, setActiveButton] = useState<string>('Overview');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === 'Modify') {
      setIsEditable(!isEditable);
    }
  };

  return (
    <div className="button-group">
      {buttonDisplay.map((buttonName) => (
        <button
          key={buttonName}
          className={`button ${buttonName.toLowerCase()} ${activeButton === buttonName ? 'active' : ''}`}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
