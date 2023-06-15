import React from "react";

export const CustomAmount = (props) => {
  return (
    <div className={props.divClass}>
      <input
        type="number"
        className={props.inputClass}
        placeholder={props.inputValue}
        onChange={props.handleChange}
      />
    </div>
  );
};
