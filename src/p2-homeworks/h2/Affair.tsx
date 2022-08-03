import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Afair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void;
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    let priorityStyle= props.affair.priority === 'high' ? styles.highPriority : styles.priority;

    return (
        <div className={styles.afair }>
            <b><span>{props.affair.name}</span></b>
            <div>
                <em><span
                    className={priorityStyle}
                > {props.affair.priority}</span></em>
                <button className={styles.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
