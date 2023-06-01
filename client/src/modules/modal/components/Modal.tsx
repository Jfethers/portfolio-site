import React, { ReactNode, RefObject } from "react";

const Modal = ({
	children,
	modalRef,
}: {
	children: ReactNode;
	modalRef: React.RefObject<HTMLDivElement>;
}) => {
	return (
		<div className='modal-overlay active'>
			<div className='modal-dialog' ref={modalRef}>
				<div className='modal-content'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
