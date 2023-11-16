import React from "react";
import "./Navbar.css";

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
            יצירת קשר
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavList;
