import React from "react";
import "./KidushCard.css";

function KidushCard(props) {
  const { frontTitle, img, backTitle, prodacts } = { ...props };

  return (
    <div className="KidushCardContainer">
      <div className="KidushCardImg" style={{ backgroundImage: `url(${img})` }}>
        <h1>{frontTitle}</h1>
      </div>
      <div className="KidishCardText">
        <h1>{backTitle}</h1>
        <ul>
          {prodacts.map((prod) => {
            return <li>{prod}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default KidushCard;
