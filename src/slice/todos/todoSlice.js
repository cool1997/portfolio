import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: `todo`,
    initialState: {
        todoList: JSON.parse(localStorage.getItem(`todoList`)) || [],
        sortType: `date`,
        allSortType: [`date`, `done`],
        isReverseSort: false,
    },
    reducers: {
        sendTodoItem(state, action) {
            const { text } = action.payload
            state.todoList = [...state.todoList, { text, id: +`${Date.now()}`, completed: false }]
        },
        changeTodoItemText(state, action) {
            const { text, id } = action.payload
            state.todoList = state.todoList
                .map((item) => item.id === id
                    ? {
                        ...item,
                        text
                    }
                    : item
                )
        },
        toggleCompleted(state, action) {
            const { id } = action.payload
            state.todoList = state.todoList
                .map(item => item.id === id
                    ? {
                        ...item,
                        completed: !item.completed
                    }
                    : item
                )
        },
        deleteTodoItem(state, action) {
            const { id } = action.payload
            state.todoList = state.todoList
                .filter(item => item.id !== id)
        },
        sortBy(state, action) {
            const { sort } = action.payload
            state.sortType = sort
        },
        doReverseSort(state, action) {
            const { isReverseSort } = action.payload
            state.isReverseSort = isReverseSort
        }
    }
})


export const { sendTodoItem, changeTodoItemText, toggleCompleted, deleteTodoItem, sortBy, doReverseSort } = todoSlice.actions

export default todoSlice.reducer