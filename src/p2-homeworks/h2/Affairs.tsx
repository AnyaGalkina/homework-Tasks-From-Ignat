import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
    filter: FilterType;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const setClassName = (filter: FilterType) => {
       return styles.button + " " + (props.filter === filter ? styles.active : '')
    }

    return (
        <div className={styles.afairsBlock}>
            {mappedAffairs}

            <button onClick={setAll}  className={setClassName('all')}>All</button>
            <button onClick={setHigh} className={setClassName('high')}>High</button>
            <button onClick={setMiddle} className={setClassName('middle')}>Middle</button>
            <button onClick={setLow} className={setClassName('low')}>Low</button>
        </div>
    )
}

export default Affairs
