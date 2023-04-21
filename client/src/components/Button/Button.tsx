import React, { FunctionComponent } from 'react';

interface IButtonProps {
    size?: string,
    disabled?: boolean,
    primary?: boolean,
    secondary?: boolean,
    children?: string,
    onClick: Function,
    type?: string
}

const Button: FunctionComponent<IButtonProps> = ( props: IButtonProps) => {
    const { children, onClick } = props;
    return (
        <div className="button" onClick={() => onClick()}>{ children }</div>
    )
}

export default Button;
