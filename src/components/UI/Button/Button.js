import React from 'react'

import styles from './Button.module.css'

const button = (props) => {
    return (
        <div>
             <button className={[styles.button, styles[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default button
