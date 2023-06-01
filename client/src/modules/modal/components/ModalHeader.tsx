import React, { FunctionComponent, ReactNode } from "react";

type ModalHeaderProps = {
	children?: ReactNode;
};

const ModalHeader: FunctionComponent = (props: ModalHeaderProps) => {
	const { children } = props;
	return <div className='modal-header'>{children}</div>;
};

export default ModalHeader;
