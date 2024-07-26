// src/ButtonGroup.js
import React, { useState } from 'react';
import './ButtonGroup.css';

interface IButtonGroupProps {
  setIsEditable: (isEditable: boolean) => void;
  isEditable: boolean;
}

const ButtonGroup = ({ setIsEditable, isEditable }: IButtonGroupProps) => {
  const [activeButton, setActiveButton] = useState<string>('Overview');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    if (buttonName === 'Modify') {
      setIsEditable(!isEditable);
    }
  };

  return (
    <div className="button-group">
      <button
        className={`button overview ${activeButton === 'Overview' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Overview')}
      >
        Overview
      </button>
      <button
        className={`button modify ${activeButton === 'Modify' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Modify')}
      >
        Modify
      </button>
      <button
        className={`button disposition ${activeButton === 'Disposition' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Disposition')}
      >
        Disposition
      </button>
      <button
        className={`button history ${activeButton === 'History' ? 'active' : ''}`}
        onClick={() => handleButtonClick('History')}
      >
        History
      </button>
    </div>
  );
};

export default ButtonGroup;
