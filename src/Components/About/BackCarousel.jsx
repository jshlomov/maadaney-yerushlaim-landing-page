import "./Carousel.css";

import { useState } from "react";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";

import img1 from "../../images/salomon1.jpg";
import img2 from "../../images/potatos1.jpg";
import img3 from "../../images/meet1.jpg";

function BackCrousel() {
  let imagesArr = [img1, img2, img3];

  const [currentImage, setCurrentImage] = useState({
    index: 0,
    curr: imagesArr[0],
  });

  const onClickLeft = () => {
    let i =
      currentImage.index == 0 ? imagesArr.length - 1 : currentImage.index - 1;
    setCurrentImage({ index: i, curr: imagesArr[i] });
  };

  const onClickRight = () => {
    let i = (currentImage.index + 1) % imagesArr.length;
    setCurrentImage({ index: i, curr: imagesArr[i] });
  };

  return (
    <div
      id="Carousel"
      className="Carousel"
      style={{ backgroundImage: `url(${currentImage.curr})` }}
    >
      <div className="leftArrow" onClick={onClickLeft}>
        <img src={leftArrow} alt="" />
      </div>
      <div className="rightArrow" onClick={onClickRight}>
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
}

export default BackCrousel;