import React from "react";

export const Reset = (props) => {
  return (
    <div className={props.divClass}>
      <button
        className={props.buttonClass}
        onClick={props.clickFunction}
        id={props.btnID}
        disabled={props.buttonState}
      >
        {props.btnName}
      </button>
    </div>
  );
};
