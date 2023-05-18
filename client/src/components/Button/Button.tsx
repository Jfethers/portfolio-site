import React, { FunctionComponent } from "react";
import classNames from "classnames";

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
	const { children, type, disabled } = props;

	return (
		<button
			type={type}
			className={classNames("button", {
				disabled: disabled,
			})}
			onClick={() => props.onClick && props.onClick()}
		>
			{children}
		</button>
	);
};

export default Button;
