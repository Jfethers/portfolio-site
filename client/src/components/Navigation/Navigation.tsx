import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

import ContactForm from "../ContactForm/ContactForm";
import classNames from "classnames";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import ContactModal from "../Modals/ContactModal";
import ModalService from "../../modules/modal/services/ModalService";

const Navigation = () => {
	const [matches, setMatches] = useState(
		window.matchMedia("(min-width: 600px)").matches
	);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		window
			.matchMedia("(min-width: 600px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	const addModal = () => {
		// @ts-ignore
		ModalService.open(ContactModal);
	};

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
			<div className='navigation-wrapper'>
				<div className='header'>
					{!matches && (
						<>
							<div
								className={classNames({
									"hamburger-wrapper": true,
									"show-menu": showMenu,
								})}
								onClick={() => setShowMenu(!showMenu)}
							>
								<span className='first'></span>
								<span className='second'></span>
								<span className='third'></span>
							</div>
							<div
								className={classNames({
									"menu-wrapper": true,
									"show-menu": showMenu,
								})}
							>
								<ul>
									<li>
										<div className='item' onClick={downloadFile}>
											Download Resume
										</div>
									</li>
									<li>
										<a
											href='https://github.com/Jfethers'
											target='_blank'
											className='item'
										>
											Github
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/jillianfetherston/'
											target='_blank'
											className='item'
										>
											LinkedIn
										</a>
									</li>
								</ul>
							</div>
						</>
					)}
					{matches && <h1>Jillian Fetherston</h1>}
					{!matches && (
						<div className='name-section'>
							<h1>Jill F</h1>
							<div className='period' />
						</div>
					)}
				</div>
				<div className='actions'>
					{matches && <Button onClick={() => addModal()}>Contact Me</Button>}
				</div>
				{matches && (
					<div className='contact-icons'>
						<div className='icon' onClick={downloadFile}>
							<GrDocumentDownload className='resume-icon' />
						</div>
						<a
							href='https://github.com/Jfethers'
							target='_blank'
							className='icon'
						>
							<AiFillGithub />
						</a>
						<a
							href='https://www.linkedin.com/in/jillianfetherston/'
							target='_blank'
							className='icon'
						>
							<AiOutlineLinkedin />
						</a>
					</div>
				)}
			</div>
		</>
	);
};

export default Navigation;
