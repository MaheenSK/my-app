import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice(
    {
        name: "todos",
        initialState: {
            onClickUpdate: false,
            idToUpdate:'',
            
            todoList: [],
           
        },
        reducers: {
            addTodo: (state, action) => {
                const newTodo = {
                    id: new Date().getTime(),
                    title: action.payload.title

                };
                state.todoList.push(newTodo);
            },
            deleteTodo: (state, action) => { 
                state.todoList = state.todoList.filter((todo) =>
                    todo.id !== action.payload.id
                );
            },
            editTodo: (state, action) => {
                state.todoList.forEach((todos) => {
                    if (todos.id === action.payload.id) {
                        todos.title = action.payload.title;
                    }
                })
            },
            onClickUpdateButton: (state, action) => {
                state.onClickUpdate = action.payload
            },
            setIdToUpdate:(state,action)=>{
                state.idToUpdate = action.payload
            },
            setIdToShow:(state,action)=>{
                state.idToShow = action.payload
            }
        },
    },
);

export const { addTodo, deleteTodo, editTodo, onClickUpdateButton  , setIdToUpdate} = todoSlice.actions;
export default todoSlice.reducer;
