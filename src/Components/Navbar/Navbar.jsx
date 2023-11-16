import React from "react";
import NavList from "./NavList";
import "./Navbar.css";
import logo from "../../images/logo-removebg-preview.png";
import MobileNavList from "./MobileNavList";

import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

function Navbar(props) {

  const HamburgerIcon = (
    <CgMenuRound
      className="Hamburger"
      size="40px"
      onClick={() => {
        props.setOpen(!props.open);
      }}
    />
  );

  const CloseIcon = (
    <CgCloseO
      className="Hamburger"
      size="40px"
      onClick={() => {
        props.setOpen(!props.open);
      }}
    />
  );

  function changeColor() {
    let a = document.querySelector(".Navbar");

    if (
      window.scrollY > 30 &&
      window.scrollY < window.innerHeight - window.innerHeight * 0.2
    ) {
      a.classList.add("bgColor");
    } else {
      a.classList.remove("bgColor");
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className="Navbar">
      {!props.open ? HamburgerIcon : CloseIcon}
      {props.open && <MobileNavList close={() => props.setOpen(!props.open)} />}
      <NavList />
      <a className="NavLogo" href="#Carousel">
        <img src={logo} alt="logo" />
        <h3>מעדני ירושלים</h3>
      </a>
    </div>
  );
}

export default Navbar;
