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
  const send = () => {
    fetch("/api/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: email.name,
        email: email.email,
        subject: email.subject,
        message: email.message,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <AboutMe />
      <Tiles />
    </>
  );
};

export default App;
