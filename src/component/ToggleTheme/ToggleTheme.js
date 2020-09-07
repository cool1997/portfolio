import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './ToggleTheme.module.scss'


const ToggleTheme = ({ isDarkTheme, toggle, ...props }) => {
    return (
        <button
            className={`
                ${styles.ToggleTheme} 
                ${isDarkTheme ? styles.darkTheme : ``} 
                btn`}
            onClick={toggle}
        >
        </button>
    )
}


const Container = compose(
    memo
)(ToggleTheme)

export { Container as ToggleTheme }