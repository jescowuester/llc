import React from 'react';
import './button.css';

export interface IButton {}
export const Button: React.FC<IButton> = ({}) => {
  return <button data-llc_button>aaaa</button>;
};

export default Button;
