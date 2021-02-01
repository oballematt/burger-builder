import React, { Component } from 'react'

import Aux from "../../hoc/Auxiliary"
import styles from "./Layout.module.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component  {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false})
    }
    render() {
        return (
            <Aux>
               <Toolbar />
               <SideDrawer closed={this.sideDrawerClosed} open={this.state.showSideDrawer} />
                <main className={styles.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

export default Layout
