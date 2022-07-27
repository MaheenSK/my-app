import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice(
    {
        name: "todos",
        initialState: {
            onClickUpdate: false,
            idToUpdate: '',
            todoList: [],
            idToShow: '',
            todoClicked: false,
            taskAdded: false,
            onClickItemUpdate: false,
            idToItemUpdate: '',

        },
        reducers: {

            addTodo: (state, action) => {
                const newTodo = {
                    id: new Date().getTime(),
                    title: action.payload.title,
                    task:[],
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

            setIdToUpdate: (state, action) => {
                state.idToUpdate = action.payload
            },

            setIdToShow: (state, action) => {
                 state.idToShow = action.payload
            },

            setTodoClicked: (state, action) => {
                state.todoClicked = action.payload;
            },

            onClickUpdateButton: (state, action) => {
                state.onClickUpdate = action.payload
            },

            addTask: (state, action) => {
                const newTask = {
                    id: new Date().getTime(),
                    title: action.payload.title,
                    completed: false,
                    date: action.payload.date,
                };
                state.todoList.map((todos) => {
                    if (todos.id === state.idToShow) {
                       todos.task.push(newTask);
                    }
                })
               
            },

            deleteTask: (state, action) => {
                const indexOfTodoItem=state.todoList.findIndex((item)=>{return item.id===state.idToShow});
                state.todoList[indexOfTodoItem].task = state.todoList[indexOfTodoItem].task.filter((task) =>
                    task.id !== action.payload.id
                );
            },

            editTask: (state, action) => {
                const indexOfTodoItem=state.todoList.findIndex((item)=>{return item.id===state.idToShow});
                state.todoList[indexOfTodoItem].task.forEach((tasks) => {
                    if (tasks.id === action.payload.id) {
                        tasks.title = action.payload.title;
                    }
                })
            },

            setTaskAdded:(state,action)=>{
                state.taskAdded=action.payload;
            },
                      
            toggleComplete: (state, action) => {
                const indexOfTodoItem=state.todoList.findIndex((item)=>{return item.id===state.idToShow});
                const index = state.todoList[indexOfTodoItem].task.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.todoList[indexOfTodoItem].task[index].completed = action.payload.completed;
            },
            
            onClickItemUpdateButton: (state, action) => {
                state.onClickItemUpdate = action.payload
            },

            setIdToItemUpdate: (state, action) => {
                state.idToItemUpdate = action.payload
            },
        },
    },
);

export const { addTodo, deleteTodo, editTodo, onClickUpdateButton, setIdToUpdate, 
    setTodoClicked, setIdToShow, addTask, setTaskAdded, toggleComplete, deleteTask,
    editTask, onClickItemUpdateButton, setIdToItemUpdate } = todoSlice.actions;
export default todoSlice.reducer;
 