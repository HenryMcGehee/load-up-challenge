import React from "react";
import './ButtonPrimary.css'

const ButtonPrimary = ({className, children, onClick}) => {
  return (
    <button className={`buttonPrimary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;