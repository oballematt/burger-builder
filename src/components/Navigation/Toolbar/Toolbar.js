import React from 'react'

import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
    return (
            <header className={styles.toolbar}>
                <div>MENU</div>
                <div className={styles.logo}>
                <Logo />
                </div>
                <nav className={styles.desktopOnly}>
                   <NavigationItems />
                </nav>
            </header>
    )
}

export default toolbar
