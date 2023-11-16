import React from "react";

function logo(props) {
  return (
    <a className="Logo" href="#Carousel">
      <img src={props.logo} alt="logo" />
      <h3>{props.text}</h3>
    </a>
  );
}

export default logo;
