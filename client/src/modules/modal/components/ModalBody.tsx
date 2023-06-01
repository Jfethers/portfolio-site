import React, { ReactNode } from "react";

const ModalBody = ({ children }: { children: ReactNode }) => {
	return <div className='modal-body'>{children}</div>;
};

export default ModalBody;
