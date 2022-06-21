import React from 'react'
import imgError404 from '../../../assets/images/404-error-with-portals-concept-illustration.webp'
import styles from './Error404.module.css'

function Error404() {
    return (
        <div>
            <img className={styles.error} alt={"404 Page not found!"} src={imgError404}/>
            {/*<div>404</div>*/}
            {/*<div>Page not found!</div>*/}
            {/*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
