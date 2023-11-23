import React from "react";
import './Navbar.css'

function NavList() {
  return (
    <nav className="NavList">
      <ul>
        <li>
          <a href="#Carousel">אודות</a>
        </li>

        <li>
          <a href="">אוכל לשבת</a>
        </li>
        <li>
          <a href="">קידושים</a>
        </li>
        <li>
          <a href="">אירועים</a>
        </li>
        <li>
          <a href="">סיטונאות</a>
        </li>
        <li>
          <a href="#ContactDetails">יצירת קשר</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
