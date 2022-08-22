import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClick: () => void
}

const Button = ({onClick, className, ...restProps}: ButtonPropsType) => {

    return (
        <div>
            <button onClick={onClick} {...restProps}>Post request</button>
        </div>
    );
};

export default Button;