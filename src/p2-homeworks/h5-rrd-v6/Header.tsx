import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import {PATH} from "./Pages"
import styles from "./Header.module.css"



function Header() {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div
            className={styles.nav}
            onMouseMove={() => {setCollapsed(false)}}
            onMouseLeave={() => {setCollapsed(true)}}
        >
            {!collapsed &&
                <div className={styles.links}>
                    <NavLink className={({isActive}) => isActive ? styles.active : styles.link} to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.active : styles.link}  to={PATH.JUNIOR}>JUNIOR</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.active : styles.link}  to={PATH.JUNIORPLUS}>JUNIOR-PLUSE</NavLink>
                </div>
            }
           <div className={styles.header}>
               <h2>Navigation 🔍</h2>
           </div>
        </div>
    )
}

export default Header
