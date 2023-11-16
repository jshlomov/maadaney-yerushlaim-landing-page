import "./App.css";
import { useState } from "react";

import Crousel from "./Components/About/Carousel";
import FoodForShabat from "./Components/FoodForShabat/FoodForShabat";
import Navbar from "./Components/Navbar/Navbar";
import logo from "./Components/logo/logo";
import mylogo from "./images/logo-removebg-preview.png";


function App() {
  const [open, setOpen] = useState(false);

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHight - revealPoint) {
        reveals[i].classList.add("active");
      }
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  };

  window.addEventListener("scroll", reveal);

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} />
      <div onClick={() => setOpen(false)}>
        <Crousel />
        <logo logo={mylogo} text="מעדני ירושלים" />
        <FoodForShabat />
      </div>
    </div>
  );
}

export default App;
