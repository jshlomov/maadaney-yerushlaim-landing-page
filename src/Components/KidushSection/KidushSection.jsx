import React from "react";
import "./KidushSection.css";

import KidushCard from "./KidushCard";
import img1 from "../../images/kidush/kidush.jpg";
import img2 from "../../images/kidush/kidushExp.jpeg";
import logo from "../../images/logos/talkingLogo.jpg";


function KidushSection() {
  const prodactsClassic = [
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
    "קיגל",
  ];
  const prodactsExpensive = [
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
    "דגים",
  ];

  return (
    <div className="KidushSection">
      <div className="KidushDescription"></div>
      <div className="KidushCardsWrapper">
        <KidushCard
          frontTitle="חבילת קידוש קלאסית"
          img={img1}
          backTitle="החבילה כוללת"
          prodacts={prodactsClassic}
        />
        <KidushCard
          frontTitle="חבילת קידוש של הביוקר"
          img={img2}
          backTitle="החבילה כוללת"
          prodacts={prodactsExpensive}
        />
      </div>
      <div className="KidushSelfCombination">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default KidushSection;
