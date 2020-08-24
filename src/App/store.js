import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './rootReducer'
// import appReducer from './features/app/appSlice'
// import todoReducer from './features/todos/todosSlice'


const store = configureStore({
    reducer: rootReducer,
})


if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default
        store.replaceReducer(newRootReducer)
    })
}


export default store