import React, { FunctionComponent } from 'react';

interface IPillProps {
    text: string,
    filter?: Function,
    onClick?: Function,

}

const Pill: FunctionComponent<IPillProps> = (props: IPillProps) => {
    const { text, onClick } = props;

    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <div className="pill" onClick={() => handleClick()}>
            {text}
        </div>
    )
}

export default Pill;

