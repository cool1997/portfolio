import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './ToggleTheme.module.scss'


const ToggleTheme = ({ isDarkTheme, setIsDarkTheme, ...props }) => {
    const Handle = {
        toggleTheme: () => {
            setIsDarkTheme((prev) => !prev)
        }
    }


    return (
        <button
            className={`
                ${styles.ToggleTheme} 
                ${isDarkTheme ? styles.darkTheme : ``} 
                btn`}
            onClick={Handle.toggleTheme}>
        </button>
    )
}


const Container = compose(
    memo
)(ToggleTheme)

export { Container as ToggleTheme }