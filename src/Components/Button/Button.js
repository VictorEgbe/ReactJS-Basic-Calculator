import React from "react";

import "./Button.css";

const isNotOperator = val => {
  const notOperator = !isNaN(val) || val === "." || val === "=";
  return notOperator ? "button-wrapper" : "button-wrapper operator";
};

const Button = props => {
  return (
    <div
      className={isNotOperator(props.children)}
      onClick={
        props.children !== "="
          ? () => props.handleClick(props.children)
          : props.handleClick
      }
    >
      {props.children}
    </div>
  );
};

export default Button;
