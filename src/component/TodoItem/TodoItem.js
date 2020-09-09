import React, { memo, useState, useEffect, useRef } from 'react'
import { compose } from 'redux'
import { useDispatch } from 'react-redux'

import { changeTodoItemText, toggleCompleted, deleteTodoItem } from '../../slice/todos/todoSlice'
import { FormTodoItem } from '../FormTodoItem/FormTodoItem'

import styles from './TodoItem.module.scss'


const TodoItem = ({ activateNull, activateId, active, text, id, completed, ...props }) => {
    const dispatch = useDispatch()

    // const [disabled, setDisabled] = useState(true)
    // const [active, setActive] = useState(false)

    const inputBodyRef = useRef(null)


    // useEffect(() => {
    //     !disabled && inputBodyRef.current.focus()
    // }, [disabled])


    const Handle = {
        changeField: (text, id) => {
            dispatch(changeTodoItemText({ text, id }))
        },
        // activated: () => {
        //     setDisabled(false)
        //     !disabled && inputBodyRef.current.focus()
        // },
        // saveChanges: () => {
        //     setDisabled(!disabled)
        // },
        toggleCompleted: (id) => {
            dispatch(toggleCompleted({ id }))
        },
        deleteTodoItem: (id) => {
            dispatch(deleteTodoItem({ id }))
        },
        // toggleActivate: () => {
        //     setActive((prev) => !prev)
        // },
    }

    return (
        active
        ? <FormTodoItem 
            text={text} 
            id={id} 
            cancelClick={activateNull} />

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
                // onKeyPress={(evt) => evt.key === `Enter` && Handle.saveChanges()}
                ref={inputBodyRef}
                onChange={evt => Handle.changeField(evt.target.value, id)}>
                {text}
            </div>
            <button
                className={`
                    ${styles.btn} 
                    ${styles.change}`}
                // onClick={Handle.activated, Handle.toggleActivate}>
                onClick={activateId}>
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


//////////////////////////////////////////////////////////////////////////////////////




// import React, { memo, useState } from 'react'
// import { compose } from 'redux'

// import { FormTodoItem } from '../FormTodoItem/FormTodoItem'

// import styles from './TodoItem.module.scss'


// const TodoItem = ({ text, id, completed, ...props }) => {
// 	const [active, setActive] = useState(false)
	

// 	const Handle = {
// 		toggleActivate: () => {
// 			setActive((prev) => !prev)
// 		},
// 	}


// 	return (
// 		active
//         ? <FormTodoItem 
//             text={text} 
//             id={id} 
//             cancelClick={Handle.toggleActivate} />
//         : <div 
//             text={text}>
//             {text}
//         </div>
// 	)
// }


// const Container = compose(
// 	memo
// )(TodoItem)

// export { Container as TodoItem }


//////////////////////////////////////////////////////////////////////////////////////

// import React, { memo, useState, useEffect, useRef } from 'react'
// import { compose } from 'redux'
// import { useDispatch } from 'react-redux'

// import { changeTodoItemText, toggleCompleted, deleteTodoItem } from '../../slice/todos/todoSlice'

// import styles from './TodoItem.module.scss'


// const TodoItem = ({ text, id, completed }) => {
//     const dispatch = useDispatch()

//     const [disabled, setDisabled] = useState(true)

//     const inputBodyRef = useRef(null)


//     useEffect(() => {
//         !disabled && inputBodyRef.current.focus()
//     }, [disabled])


//     const Handle = {
//         changeField: (text, id) => {
//             dispatch(changeTodoItemText({ text, id }))
//         },
//         activated: () => {
//             setDisabled(false)
//             !disabled && inputBodyRef.current.focus()
//         },
//         saveChanges: () => {
//             setDisabled(!disabled)
//         },
//         toggleCompleted: (id) => {
//             dispatch(toggleCompleted({ id }))
//         },
//         deleteTodoItem: (id) => {
//             dispatch(deleteTodoItem({ id }))
//         }
//     }

//     return (
//         <li className={`${styles.TodoItem}`}>
//             <label 
//                 className={`
//                     ${styles.check} 
//                     ${completed ? styles.success : ``}`}>
                
//                 <input
//                     className={`visually-hidden`}
//                     checked={completed}
//                     type='checkbox'
//                     onChange={() => Handle.toggleCompleted(id)}/>
//             </label>
//             <textarea
//                 className={`
//                     ${styles.todoBody} 
//                     ${!completed ? `border-warning` : `border-success`}`}
//                 onKeyPress={(evt) => evt.key === `Enter` && Handle.saveChanges()}
//                 ref={inputBodyRef}
//                 type='text'
//                 value={text}
//                 onChange={evt => Handle.changeField(evt.target.value, id)}
//                 disabled={disabled}
//             />
//             <button
//                 className={`${styles.btn} ${styles.change}`}
//                 onClick={() => {
//                     disabled
//                         ? Handle.activated()
//                         : Handle.saveChanges()
//                 }}>
//                 {disabled
//                     ? `change`
//                     : `save`
//                 }
//             </button>
//             <button 
//                 className={`
//                     ${styles.btn} 
//                     ${styles.delete}`}
//                 onClick={() => Handle.deleteTodoItem(id)}>&times;
//             </button>
//         </li>
//     )
// }


// const Container = compose(
//     memo
// )(TodoItem)

// export { Container as TodoItem }