import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

import appReducer from '../slice/app/appSlice'
import todoReducer from '../slice/todos/todoSlice'

export const rootReducer = combineReducers({
    app: appReducer,
    todo: todoReducer,
    form: formReducer,
})