import React from 'react'

import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return (
            <header className={styles.toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked} />
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
