import React, { FunctionComponent, useState } from "react";
import Project from "../../types/Project";
import Modal from "../Modal/Modal";
import tileColors from "../../styles/variables/_variables.scss";
import Pill from "../Pill/Pill";

interface ITileProps {
	key: string;
	project: Project;
	index: number;
}

const Tile: FunctionComponent<ITileProps> = (props: ITileProps) => {
	const { project, index } = props;
	const [showModal, setShowModal] = useState(false);
	const tileKey = project.color as keyof typeof tileColors;
	const tileColor = tileColors[tileKey];

	return (
		<>
			<div
				style={{ backgroundColor: tileColor, animationDelay: index / 6 + "s" }}
				className='tile'
				onClick={() => setShowModal(true)}
			>
				{project.title}
			</div>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<div className='tile-contents'>
					<h1>{project.title}</h1>
					<h3>{project.subHeading}</h3>
					<div className='pill-wrapper'>
						{project.tech.map((t) => {
							return <Pill key={t} text={t} />;
						})}
					</div>
					<p>Company: {project.job}</p>
					{project.description.map((description, index) => {
						return <p key={index}>{description}</p>;
					})}
					{project.link && <a href={project.link}>{project.link}</a>}
				</div>
			</Modal>
		</>
	);
};

export default Tile;
