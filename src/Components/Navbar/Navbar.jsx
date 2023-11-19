import React from "react";
import NavList from "./NavList";
import "./Navbar.css";

import logo from "../../images/logos/logo-wbg.png";
import watsaapIcon from "../../images/icons/whatsapp.png";
import MobileNavList from "./MobileNavList";
import file from "../../files/tafrit.jpg";

import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";

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

    if (window.scrollY > 30 && window.scrollY < window.innerHeight) {
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
      <a className="NavPhone" href="https://wa.me/+972586707014">
        058-6707014
        <img src={watsaapIcon}></img>
      </a>
      <a className="menuDownload" href={file} download>
        להורדת התפריט
        <MdRestaurantMenu size={'30px'} style={{paddingRight: '5px'}}/>
      </a>
      <a className="NavLogo" href="#Carousel">
        <img src={logo} alt="logo" />
        <h3>מעדני ירושלים</h3>
      </a>
    </div>
  );
}

export default Navbar;
