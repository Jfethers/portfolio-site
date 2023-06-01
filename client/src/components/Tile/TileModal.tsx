import React, { FunctionComponent } from "react";
import Modal from "../../modules/modal/components/Modal";
import ModalBody from "../../modules/modal/components/ModalBody";
import ModalHeader from "../../modules/modal/components/ModalHeader";
import ModalFooter from "../../modules/modal/components/ModalFooter";
import Pill from "../Pill/Pill";
import { CgClose } from "react-icons/cg";

const TileModal = (props: any) => {
	const { project } = props;
	console.log("props", props);
	return (
		<Modal modalRef={props.modalRef}>
			<ModalHeader>
				<h3>{project.title}</h3>
				<CgClose className='close' onClick={props.close} />
			</ModalHeader>
			<ModalBody>
				<div className='pill-wrapper'>
					{project.tech.map((t: string) => {
						return <Pill key={t} text={t} />;
					})}
				</div>
				<p>Company: {project.job}</p>
				{project.description.map((description: string[], index: number) => {
					return <p key={index}>{description}</p>;
				})}
			</ModalBody>
			{/* <ModalFooter></ModalFooter> */}
		</Modal>
	);
};

export default TileModal;
