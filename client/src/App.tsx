import React, { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/About/AboutMe";
import "./App.scss";
import Tiles from "./components/Tiles/Tiles";

const email = {
  name: "Jill",
  email: "jillfetherston@gmail.com",
  subject: "email subject",
  message: "email message",
};

const App = () => {
  return (
    <>
      <Navigation />
      <AboutMe />
      <Tiles />
    </>
  );
};

export default App;
