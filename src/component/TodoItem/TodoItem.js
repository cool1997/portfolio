import React, { memo, useRef } from 'react'
import { compose } from 'redux'
import { useDispatch } from 'react-redux'

import { changeTodoItemText, toggleCompleted, deleteTodoItem } from '../../slice/todos/todoSlice'
import { FormTodoItem } from '../FormTodoItem/FormTodoItem'

import styles from './TodoItem.module.scss'


const TodoItem = ({ setActiveField, active, text, id, completed, ...props }) => {
    const dispatch = useDispatch()

    const inputBodyRef = useRef(null)


    const Handle = {
        changeField: (text) => {
            dispatch(changeTodoItemText({ text, id }))
        },
        toggleCompleted: (id) => {
            dispatch(toggleCompleted({ id }))
        },
        deleteTodoItem: (id) => {
            dispatch(deleteTodoItem({ id }))
        },
    }


    return (
        active
        ? <FormTodoItem 
            text={text} 
            id={id} 
            active={active}
            saveFieldClick={Handle.changeField}
            setActiveField={setActiveField} />

        : <li className={`${styles.TodoItem}`}>
            <label 
                className={`
                    ${styles.check} 
                    ${completed ? styles.success : ``}`}>
                
                <input
                    className={`visually-hidden`}
                    checked={completed}
                    type='checkbox'
                    onChange={() => Handle.toggleCompleted(id)}/>
            </label>
            <div 
                className={`${styles.todoBody}`}
                ref={inputBodyRef}
                onChange={evt => Handle.changeField(evt.target.value, id)}>
                {text}
            </div>
            <button
                className={`
                    ${styles.btn} 
                    ${styles.change}`}
                onClick={() => setActiveField(id)}>
                change
            </button>
            <button 
                className={`
                    ${styles.btn} 
                    ${styles.delete}`}
                onClick={() => Handle.deleteTodoItem(id)}>&times;
            </button>
        </li>
    )
}


const Container = compose(
    memo
)(TodoItem)

export { Container as TodoItem }