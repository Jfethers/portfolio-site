import React, { FunctionComponent, ReactNode } from "react";

type ModalFooterProps = {
	children?: ReactNode;
};

const ModalFooter: FunctionComponent = (props: ModalFooterProps) => {
	const { children } = props;
	return <div className='modal-footer'>{children}</div>;
};

export default ModalFooter;
