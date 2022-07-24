import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/taskSlice';

const TaskItem = ({id, title}) => {
const dispatch=useDispatch();
const onUpdate=()=>{
  dispatch(editTask(id))
};
const onDelete=()=>{
  dispatch(deleteTask({id:id}))
};
  return (
    
    <>
    <div style={{display:"flex", width:"900px"}} className='shadow mx-2'>
    <div style={{width:"165px" }} className='m-2'>
            <input type='checkbox' style={{width:'95px'}}></input>
        </div>
        <div style={{width:"160px"}} className='m-2'>
            {title}
        </div>
        <div style={{width:"340px"}} className='m-2'>
           7/24/2022
        </div>
        <div style={{width:"120px"}}><button className='btn m-2' style={{backgroundColor:"transparent"}} 
        onClick={onUpdate} >
        <img style={{ width:"20px"}} src="icons8-edit-50.png" />
        </button></div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}} 
        onClick={onDelete}>
        <img style={{ width:"20px"}} src="icons8-delete-30.png" />
        </button></div>
    </div>
    </>
  )
}


export default TaskItem
