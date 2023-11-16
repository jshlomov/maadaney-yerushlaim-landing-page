import React from "react";
import "./Navbar.css";

import logo from '../../images/logos/fat-logo-PhotoRoom.png-PhotoRoom.png'

function MobileNavList(props) {
  return (
    <nav className="MobileNavList animIn">
      <ul>
        <li>
          <a href="" onClick={props.close}>
            אודות
          </a>
        </li>

        <li>
          <a href="" onClick={props.close}>
            אוכל לשבת
          </a>
        </li>
        <li>
          <a href="" onClick={props.close}>
            אירועים
          </a>
        </li>
        <li>
          <a href="" onClick={props.close}>
            קידושים
          </a>
        </li>
        <li>
          <a href="" onClick={props.close}>
            סיטונאות
          </a>
        </li>
        <li>
          <a href="" onClick={props.close}>
            יצירת קשר
          </a>
        </li>
      </ul>
      <div className="logoAndDescription">
        <img src={logo} alt="logo"/>
      </div>
    </nav>
  );
}

export default MobileNavList;
