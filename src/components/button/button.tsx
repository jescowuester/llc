import React, { forwardRef } from 'react';
import './button.css';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  spinner?: JSX.Element;
}

const Button: React.FC<IButton> = (
  { isLoading, spinner: customSpinner, disabled, children, ...props },
  ref
) => {
  const _props = {
    ...props,
    'data-llc_button': true,
    disabled: disabled || isLoading,
    ref,
  };

  if (isLoading) {
    return (
      <button data-is-loading {..._props}>
        <div data-loader>
          <div>Loading...</div>
        </div>
        <div aria-hidden data-content>
          {children}
        </div>
      </button>
    );
  }

  return <button {..._props}>{children}</button>;
};

export default forwardRef(Button);
