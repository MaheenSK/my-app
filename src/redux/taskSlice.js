import {createSlice} from '@reduxjs/toolkit';
    
    const taskSlice=createSlice(
        {
            name:"tasks",
        initialState:{
            onClickUpdate:false,
            idToUpdate:'',
            taskList:[
            ]
        },
        reducers:{
            addTask:(state, action)=>{
                const newTask={
                    id: new Date().getTime(),
                    title:action.payload.title,
                    completed: false,
                    date:action.payload.date,
                };
                state.taskList.push(newTask);
            },
            deleteTask: (state, action) => {
                state.taskList = state.taskList.filter((task) =>
                    task.id !== action.payload.id
                );
            },
            editTask: (state, action) => {
                state.taskList.forEach((tasks) => {
                    if (tasks.id === action.payload.id) {
                        tasks.title = action.payload.title;
                    }
                })
            },
            toggleComplete:(state, action)=>{
                const index=state.taskList.findIndex(
                    (task)=>task.id===action.payload.id
                );
                state.taskList[index].completed = action.payload.completed;
            },
            onClickUpdateButton: (state, action) => {
                state.onClickUpdate = action.payload
            },
            setIdToUpdate:(state,action)=>{
                state.idToUpdate = action.payload
            }
            },
        }
        );
    export const {addTask, deleteTask, editTask , toggleComplete, onClickUpdateButton  , setIdToUpdate }= taskSlice.actions;
    export default taskSlice.reducer;

      