import "./Carousel.css";

import { useState } from "react";
import rightArrow from "../../images/right-arrow.png";
import leftArrow from "../../images/left-arrow.png";

import img1 from "../../images/fishesImage1.jpg";
import img2 from "../../images/foodForShabat.jpeg";
import img3 from "../../images/hamin.jpg";

function Crousel() {
  let imagesArr = [
    <img className="currImg" src={img1}></img>,
    <img className="currImg" src={img2}></img>,
    <img className="currImg" src={img3}></img>,
  ];

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
    <div id="Carousel" className="Carousel ">
      {currentImage.curr}
      <div className="leftArrow" onClick={onClickLeft}>
        <img src={leftArrow} alt="" />
      </div>
      <div className="rightArrow" onClick={onClickRight}>
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
}

export default Crousel;
