import React from 'react';
import './checkbox.css';

export interface ICheckbox {}
export const Checkbox: React.FC<ICheckbox> = ({}) => {
  return <input type="checkbox" data-llc-checkbox />;
};

export default Checkbox;
