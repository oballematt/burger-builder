import React from 'react'

import styles from './Logo.module.css'
import burgerLogo from "../../assets/images/burger-logo.png"
const logo = (props) => {
    return (
        <div className={styles.logo} >
            <img src={burgerLogo} alt="burger" />
        </div>
    )
}

export default logo
