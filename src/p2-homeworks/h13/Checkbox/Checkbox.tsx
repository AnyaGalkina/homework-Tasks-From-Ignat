import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CheckboxPropsType = DefaultInputPropsType & {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({type, className, onChange, ...restProps}:CheckboxPropsType) => {

    return (
        <div>
            <input
                type={"checkbox"}
                onChange={onChange}
                {...restProps}
            />
        </div>
    );
};

export default Checkbox;