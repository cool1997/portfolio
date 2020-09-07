import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './ToggleNavbar.module.scss'


const ToggleNavbar = ({isActiveNavbar, toggle, ...props}) => {
    return (
        <button 
            className={`
                ${styles.ToggleNavbar}
                ${isActiveNavbar ? styles.active : ``}
                btn    
            `}
            onClick={toggle}
        >
        </button>
    )
}


const Container = compose(
    memo
)(ToggleNavbar)

export { Container as ToggleNavbar }