import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react"
import {Slider} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperDoubleRangePropsType = {
    step: number
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType & DefaultInputPropsType> = (
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        min, max, step, onChangeRange,
        value, onChange
    }
) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, newValue: [number, number]) => {
        onChange && onChange(e)
        onChangeRange && onChangeRange(newValue as [number, number]);
        };

    return (
        <>
                <Slider
                    sx={{ width: 300 }}
                    value={value}
                    step={step}
                    min={min}
                    max={max}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    color="secondary"
                />
        </>
    )
}

export default SuperDoubleRange
