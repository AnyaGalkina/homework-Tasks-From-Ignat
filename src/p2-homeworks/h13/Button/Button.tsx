import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClick: () => void;
    isFetching: boolean
}

const Button = ({onClick, className, isFetching,  ...restProps}: ButtonPropsType) => {

    return (
        <div>
            <button onClick={onClick} {...restProps} disabled={isFetching}>Post request</button>
        </div>
    );
};

export default Button;