import React, { useState } from "react";
import "../styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <section className="header">
      <h1>Dikshant</h1>
      <div
        className="nav-menu-icon-container"
        onClick={() => setOpenMenu(true)}
      >
        <MenuIcon className="nav-menu-icon" />
      </div>
      <ul className={openMenu ? "show-menu" : "nav-item"}>
        <div className="nav-close-icon-container">
          <CloseIcon
            className="nav-close-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#project">Projects</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#education">Education</a>
        </li>
      </ul>
    </section>
  );
}

export default Header;
