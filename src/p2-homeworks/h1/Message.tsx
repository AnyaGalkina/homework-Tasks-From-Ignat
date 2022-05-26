import React from 'react';
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div>
                <img src={props.avatar} alt={'avatar'} className={styles.avatar}/>
            </div>
            <div className={styles.triangle}></div>
            <div className={styles.messageBody}>
                <h5 className={styles.name}>{props.name}</h5>
                <p className={styles.messageItem}>{props.message}</p>
                <div>
                    <p className={styles.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
