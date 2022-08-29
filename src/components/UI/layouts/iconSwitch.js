import React from "react";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="d-flex flex-row justify-content-end w-100 my-2">
      <i className={`bi bi-${icon} mx-5`} onClick={onSwitch}></i>
    </div>
  );
};

export default IconSwitch;
