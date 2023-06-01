import React from "react";
import Modal from "../../modules/modal/components/Modal";
import ModalBody from "../../modules/modal/components/ModalBody";
import ModalHeader from "../../modules/modal/components/ModalHeader";
import ModalFooter from "../../modules/modal/components/ModalFooter";
import Pill from "../Pill/Pill";
import { CgClose } from "react-icons/cg";
import tileColors from "../../styles/variables/_variables.scss";

const TileModal = (props: any) => {
	const { project } = props;

	const tileKey = project.color as keyof typeof tileColors;
	const tileColor = tileColors[tileKey];

	return (
		<div className='tile-modal'>
			<Modal modalRef={props.modalRef}>
				<ModalHeader>
					<h1 style={{ color: tileColor }}>{project.title}</h1>
					<CgClose
						className='close'
						onClick={props.close}
						style={{ color: tileColor }}
					/>
				</ModalHeader>
				<ModalBody>
					<h2>Company: {project.job}</h2>
					{project.description.map((description: string[], index: number) => {
						return <p key={index}>{description}</p>;
					})}

					{project.link && (
						<div className='link-wrapper'>
							<a
								style={{ color: tileColor, textDecoration: "none" }}
								href={project.link}
							>
								{project.title}
							</a>
						</div>
					)}

					<div className='pill-wrapper'>
						{project.tech.map((t: string) => {
							return <Pill tileColor={tileColor} key={t} text={t} />;
						})}
					</div>
				</ModalBody>
				{/* <ModalFooter></ModalFooter> */}
			</Modal>
		</div>
	);
};

export default TileModal;
