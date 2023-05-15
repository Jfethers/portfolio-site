import React, { FunctionComponent } from "react";

interface IButtonProps {
	size?: string;
	disabled?: boolean;
	primary?: boolean;
	secondary?: boolean;
	children?: string;
	onClick?: Function;
	type?: "submit" | "reset" | undefined;
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
	const { children, type } = props;

	return (
		<>
			<button
				type={type}
				className='button'
				onClick={() => props.onClick && props.onClick()}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
