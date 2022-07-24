import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice(
    {
        name: "todos",
        initialState: {
            onClickUpdate: false,
            idToUpdate:'',
            todoTaskList: [],
        },
        reducers: {
            addTodo: (state, action) => {
                const newTodo = {
                    id: new Date().getTime(),
                    title: action.payload.title
                };
                state.todoTaskList.push(newTodo);
            },
            deleteTodo: (state, action) => {
                state.todoTaskList = state.todoTaskList.filter((task) =>
                    task.id !== action.payload.id
                );
            },
            editTodo: (state, action) => {
                state.todoTaskList.map((tasks) => {
                    if (tasks.id === action.payload.id) {
                        tasks.title = action.payload.title;
                    }
                })
            },
            onClickUpdateButton: (state, action) => {
                state.onClickUpdate = action.payload
            },
            setIdToUpdate:(state,action)=>{
                state.idToUpdate = action.payload
            }
        },
    },
);

export const { addTodo, deleteTodo, editTodo, onClickUpdateButton  , setIdToUpdate} = todoSlice.actions;
export default todoSlice.reducer;
