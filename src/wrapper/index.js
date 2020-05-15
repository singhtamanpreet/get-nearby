import React from "react";
import logo from "../globals/assets/images/logo.svg";

const Wrapper = () => {
  return (
    <div className="Wrapper">
      <header className="Wrapper-header">
        <img src={logo} className="Wrapper-logo" alt="logo" />
        <h1>Welcome to Get-nearby React Shell</h1>
      </header>
    </div>
  );
};

export default Wrapper;
