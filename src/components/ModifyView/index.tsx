// src/ButtonGroup.js
import React from 'react';
import './ButtonGroup.css';


interface IButtonGroupProps {
    setIsEditable: (isEditable: boolean) => void;
    isEditable: boolean;
}
const ButtonGroup = ({setIsEditable , isEditable} : IButtonGroupProps) => {
  return (
    <div className="button-group">
      <button className="button overview">Overview</button>
      <button className="button modify" onClick={() => setIsEditable(!isEditable)}>Modify</button>
      <button className="button disposition">Disposition</button>
      <button className="button history">History</button>
    </div>
  );
};

export default ButtonGroup;
