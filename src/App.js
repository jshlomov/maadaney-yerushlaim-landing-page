import "./App.css";
import { useState } from "react";

import FoodForShabat from "./Components/FoodForShabat/FoodForShabat";
import Navbar from "./Components/Navbar/Navbar";
import BackCrousel from "./Components/About/BackCarousel";
import ContactDetails from "./Components/ContactDetails/ContactDetails";
import KidushCard from "./Components/KidushSection/KidushCard";
import KidushSection from "./Components/KidushSection/KidushSection";


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
        {/* <Crousel /> */}
        <BackCrousel />
        <FoodForShabat />
        <KidushSection />
        <ContactDetails />
      </div>
    </div>
  );
}

export default App;
