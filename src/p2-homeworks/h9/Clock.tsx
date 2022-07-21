import React, {useState} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const optionsTime = {
        hour: "numeric", minute: "numeric", second: "numeric",
        hour12: false
    };
    //@ts-ignore
    const stringTime = date.toLocaleString("en-US", optionsTime)
    const stringDate = new Intl.DateTimeFormat("en-GB").format(date)

    return (
        <div className={styles.main}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={styles.clock}
            >
                {stringTime}
            </div>


                <div  className={styles.date}>
                    {show &&  stringDate}
                </div>

            <SuperButton className={styles.button} onClick={start}>start</SuperButton>
            <SuperButton className={styles.button} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
