import React, { FunctionComponent, ReactNode } from "react";

type ModalBodyProps = {
	children?: ReactNode;
};

const ModalBody: FunctionComponent = (props: ModalBodyProps) => {
	const { children } = props;
	return <div className='modal-body'>{children}</div>;
};

export default ModalBody;
