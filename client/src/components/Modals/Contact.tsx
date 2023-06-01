import React, { FunctionComponent } from "react";
import Modal from "../../modules/modal/components/Modal";
import ModalBody from "../../modules/modal/components/ModalBody";
import ModalHeader from "../../modules/modal/components/ModalHeader";
import ModalFooter from "../../modules/modal/components/ModalFooter";
import Pill from "../Pill/Pill";
import { CgClose } from "react-icons/cg";
import ContactForm from "../ContactForm/ContactForm";

const Tile = (props: any) => {
	const { project } = props;
	return (
		<Modal modalRef={props.modalRef}>
			<ModalHeader>
				<h3>Say Hi!</h3>
				<CgClose className='close' onClick={props.close} />
			</ModalHeader>
			<ModalBody>
				<ContactForm />
			</ModalBody>
			{/* <ModalFooter></ModalFooter> */}
		</Modal>
	);
};

export default Tile;