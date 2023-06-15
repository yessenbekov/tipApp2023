import React from "react";

export const CustomInput = (props) => {
  return (
    <div className="form-input">
      <span className="input-icon">
        <img src={props.icon} alt="" />
      </span>
      <input
        id={props.inputID}
        name={props.inputName}
        type="number"
        placeholder="0"
        onChange={props.handleChange}
      />
    </div>
  );
};
