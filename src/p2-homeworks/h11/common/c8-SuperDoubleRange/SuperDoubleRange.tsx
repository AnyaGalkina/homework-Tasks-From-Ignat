import React, {ChangeEvent} from "react"
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    step: number
    onChangeRange?: (value: [number, number]) => void
    value: any
    min: number
    max: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        min, max, step, onChangeRange,
        value,
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    return (
        <>
            <Slider
                sx={{width: 300}}
                value={value}
                step={step}
                min={min}
                max={max}
                //@ts-ignore
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                color="secondary"
            />
        </>
    )
}

export default SuperDoubleRange
