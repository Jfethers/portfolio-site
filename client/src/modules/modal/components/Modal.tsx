import React, { ReactNode } from "react";

const Modal = ({
	children,
	modalRef,
	matches,
}: {
	children: ReactNode;
	modalRef: React.RefObject<HTMLDivElement>;
	matches: boolean;
}) => {
	return (
		<div className='modal-overlay active'>
			<div className='modal-dialog' ref={matches ? modalRef : null}>
				<div className='modal-content'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
