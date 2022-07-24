import {createSlice} from '@reduxjs/toolkit';

    const taskSlice=createSlice(
        {
            name:"tasks",
        initialState:[
        ],
        reducers:{
            addTask:(state, action)=>{
                const newTask={
                    id: new Date().getTime(),
                    title:action.payload.title,
                };
                state.push(newTask);
            },
            deleteTask:(state,action)=>{
                return state.filter((task)=>task.id !== action.payload.id);
            },
            editTask:(state,action)=>{
            },
            },
        }
        );
    export const {addTask, deleteTask, editTask }= taskSlice.actions;
    export default taskSlice.reducer;

      