import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div>
            // add NavLinks
            {/*<h2 onMouseOver={() => {}}>Navigation</h2>*/}
            <NavLink to={PATH.PRE_JUNIOR} />
            <NavLink to={PATH.JUNIOR} />
            <NavLink to={PATH.JUNIORPLUS} />
        </div>
    )
}

export default Header
