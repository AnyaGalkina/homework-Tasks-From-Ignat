import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import {PATH} from "./Pages"
import styles from "./Header.module.css"



function Header() {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className={styles.nav}
             // onMouseOut={() => {setCollapsed(true)}}
        >
            <h2 className={styles.header}
                onMouseOver={() => {setCollapsed(false)}}
                // onBlur={() => {setCollapsed(true)}}
            >Navigation 🔍</h2>

            {!collapsed &&
                <div>
                        <NavLink className={styles.link} to={PATH.PRE_JUNIOR}>PRE-JUNIOR</NavLink>
                        <NavLink className={styles.link} to={PATH.JUNIOR}>JUNIOR</NavLink>
                        <NavLink className={styles.link} to={PATH.JUNIORPLUS}>JUNIOR-PLUSE</NavLink>
                </div>
            }
        </div>
    )
}

export default Header
