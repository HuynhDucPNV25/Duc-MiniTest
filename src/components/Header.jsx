import React from "react";
import pnLogo from "../assets/pn-logo.png";
export const Header = ({name}) => {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for ({name}))</h1>
      </header>
    </>
  );
};
