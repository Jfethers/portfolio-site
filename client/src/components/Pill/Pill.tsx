import React, { FunctionComponent } from "react";
import tileColors from "../../styles/variables/_variables.scss";

interface IPillProps {
	text: string;
	filter?: Function;
	onClick?: Function;
	tileColor?: string;
}

const Pill: FunctionComponent<IPillProps> = (props: IPillProps) => {
	const { text, onClick, tileColor } = props;

	const handleClick = () => {
		if (onClick) {
			return onClick();
		}
	};

	return (
		<div
			style={
				tileColor
					? { backgroundColor: tileColor }
					: { backgroundColor: tileColors.paynesGray }
			}
			className='pill'
			onClick={() => handleClick()}
		>
			{text}
		</div>
	);
};

export default Pill;
