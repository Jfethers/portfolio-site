import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/ContactForm";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineDownload,
} from "react-icons/ai";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const downloadFile = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div className="navigation-wrapper">
        <div className="header">
          <h1>Jillian Fetherston</h1>
        </div>
        <div className="actions">
          <Button onClick={() => setShowModal(true)}>Contact Me</Button>
        </div>
        <div className="contact-icons">
          <div className="icon" onClick={downloadFile}>
            <AiOutlineDownload />
          </div>
          <a
            href="https://github.com/Jfethers"
            target="_blank"
            className="icon"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jillianfetherston/"
            target="_blank"
            className="icon"
          >
            <AiOutlineLinkedin />
          </a>
          {/* <a href="https://www.instagram.com/jill.no.one/" target="_blank" className="icon">
                        <AiOutlineInstagram/>
                    </a> */}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default Navigation;
