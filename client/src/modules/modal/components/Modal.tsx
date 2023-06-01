import React, { FunctionComponent, ReactNode } from "react";

type ModalProps = {
	children?: ReactNode;
};

const Modal: FunctionComponent = (props: ModalProps) => {
	const { children } = props;
	return (
		<div className='modal-overlay'>
			<div className='modal-dialog'>
				<div className='modal-content'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
