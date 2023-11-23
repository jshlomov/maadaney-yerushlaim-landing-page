import React from "react";
import "./FoodForShabat.css";

import file from "../../files/tafrit.jpg";
import { MdRestaurantMenu } from "react-icons/md";


function FoodForShabat(props) {
  return (
    <div className="FoodForShabat">
      <a className="menuDownloadFFS" href={file} download>
        להורדת התפריט
        <MdRestaurantMenu size={"30px"} style={{ paddingRight: "5px" }} />
      </a>
    </div>
  );
}

export default FoodForShabat;
