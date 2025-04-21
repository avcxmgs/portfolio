import "./App.css";
import React from "react";

import Button from "./components/Button/Button";
import Label from "./components/Label/Label";
import Text from "./components/Text/Text";
import Table from "./components/Table/Table";
import Img from "./components/Img/Img";
import HeroImage from "./components/Hero_Image/HeroImage";
import RadioButton from "./components/Radio_Button/RadioButton";
import Dropdown from "./components/Dropdown/Dropdown";

import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Resources from "./pages/Resources";
import Setup from "./pages/Setup";

function App() {
  return (
    <>
      <main>
        <HeroImage
          src="IMG_3291.jpg"
          alt="fairy lights and lanterns"
          text="WELCOME!"
          disabled={false}
        />
        <Navbar />
        <About />
        <Work />
        <Skills />
        <Resources />
        <Setup />
      </main>
    </>
  );
}

export default App;
