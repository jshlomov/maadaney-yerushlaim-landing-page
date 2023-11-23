import "./Carousel.css";

import { useEffect, useRef, useState } from "react";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";

import img1 from "../../images/salomon1.jpg";
import img2 from "../../images/potatos1.jpg";
import img3 from "../../images/fishHamburger.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

function BackCrousel() {
  let imagesArr = [img1, img2, img3];
  let stringArr = [
    "איכות לפני הכל",
    "ממלכת סלטים שלנו",
    "מגוון טעמים במקום אחד",
  ];

  const [currentImage, setCurrentImage] = useState({
    index: 0,
    curr: imagesArr[0],
    header: stringArr[0],
  });

  const onClickLeft = () => {
    let i =
      currentImage.index == 0 ? imagesArr.length - 1 : currentImage.index - 1;
    setCurrentImage({ index: i, curr: imagesArr[i], header: stringArr[i] });
  };

  const onClickRight = () => {
    let i = (currentImage.index + 1) % imagesArr.length;
    setCurrentImage({ index: i, curr: imagesArr[i], header: stringArr[i] });
  };

  const ref = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     ref.current.click();
  //     //TODO: ברגע שמחליף תמונה סוגר את הנאובר
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="Carousel" className="Carousel">
      <div
        className="CarouselImage"
        style={{ backgroundImage: `url(${currentImage.curr})` }}
      ></div>
      <h1 className="activeUp">{currentImage.header}</h1>
      <div className="leftArrow" onClick={onClickLeft}>
        <img src={leftArrow} alt="left arrow" />
      </div>
      <div className="rightArrow" onClick={onClickRight} ref={ref}>
        <img src={rightArrow} alt="right arrow" />
      </div>
    </div>
  );
}

export default BackCrousel;
