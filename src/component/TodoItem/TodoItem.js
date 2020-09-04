import React, { memo, useState, useEffect, useRef } from 'react'
import { compose } from 'redux'
import { useDispatch } from 'react-redux'

import { changeTodoItemText, toggleCompleted, deleteTodoItem } from '../../slice/todos/todoSlice'

import styles from './TodoItem.module.scss'


const TodoItem = ({ text, id, completed }) => {
    const dispatch = useDispatch()

    const [disabled, setDisabled] = useState(true)

    const inputBodyRef = useRef(null)


    useEffect(() => {
        !disabled && inputBodyRef.current.focus()
    }, [disabled])


    const Handler = {
        changeField: (text, id) => {
            dispatch(changeTodoItemText({ text, id }))
        },
        activated: () => {
            setDisabled(false)
            !disabled && inputBodyRef.current.focus()
        },
        saveChanges: () => {
            setDisabled(!disabled)
        },
        toggleCompleted: (id) => {
            dispatch(toggleCompleted({ id }))
        },
        deleteTodoItem: (id) => {
            dispatch(deleteTodoItem({ id }))
        }
    }

    return (
        <li className={`${styles.TodoItem}`}>
            <div className={`input-group `}>
                <div className={`input-group-prepend`}>
                    <div className={`${styles.check} ${completed ? styles.success : ``} input-group-text ${!completed ? `border-warning` : `border-success`}`}>
                        <input
                            checked={completed}
                            type='checkbox'
                            onChange={() => Handler.toggleCompleted(id)}
                        />
                    </div>
                </div>
                <input
                    onKeyPress={(evt) => evt.key === `Enter` && Handler.saveChanges()}
                    ref={inputBodyRef}
                    type='text'
                    className={`${styles.todoBody} form-control ${!completed ? `border-warning` : `border-success`}`}
                    value={text}
                    onChange={evt => Handler.changeField(evt.target.value, id)}
                    disabled={disabled} 
                />
                <button
                    className={`btn btn-primary form-control col-2`}
                    onClick={() => {
                        disabled
                            ? Handler.activated()
                            : Handler.saveChanges()
                    }}>
                    {disabled
                        ? `change`
                        : `save`
                    }
                </button>
                <button className={`btn btn-danger form-control col-1`}
                    onClick={() => Handler.deleteTodoItem(id)}>&times;</button>
            </div>
        </li>
    )
}


const Container = compose(
    memo
)(TodoItem)

export { Container as TodoItem }