import React, {useState} from "react"
import SuperRange from "./common/c7-SuperRange/SuperRange"
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange"
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import styles from "./HW11.module.css";


function HW11() {
    const [step, setStep] = useState(10)
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const doubleRangeValue: [number, number] = [value1, value2];
    const onDoubleChangeHandler = (newValue: [number, number]) => {
        setValue1(newValue[0]);
        setValue2(newValue[1]);
    }
    const stepOptions = [1, 10, 50]
    const onChangeStepHandler = (step: number) => {
        setStep(step)
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={styles.div}>
                <span>Choose step</span>
                <SuperRadio options={stepOptions}
                            onChangeOption={onChangeStepHandler}
                />
            </div>
            <div className={styles.div}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    step={step}
                    min={min}
                    max={max}
                />
            </div>
            <div className={styles.div}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={doubleRangeValue}
                    onChangeRange={onDoubleChangeHandler}
                    step={step}
                    min={min}
                    max={max}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
