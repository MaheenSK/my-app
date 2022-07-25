import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask, onClickUpdateButton, setIdToUpdate } from '../redux/taskSlice';

const TaskItem = ({id, title,completed, date}) => {
const dispatch=useDispatch();
const onUpdate=()=>{
  dispatch(onClickUpdateButton(true));
  dispatch(setIdToUpdate(id));
};
const onDelete=()=>{
  dispatch(deleteTask({id:id}))
};
const onCompleteClick=()=>{
  dispatch(toggleComplete(
    {id:id, completed: !completed}
    ))
    //console.log(date);
};
  return (
    
    <>
    <div style={{display:"flex", width:"900px"}} className='shadow mx-2'>
    <div style={{width:"165px" }} className='m-2'>
            <input type='checkbox' style={{width:'95px'}} checked={completed} onChange={onCompleteClick}></input>
        </div>
        <div style={{width:"160px"}} className='m-2'>
            {title}
        </div>
        <div style={{width:"340px"}} className='m-2'>
          {date}
        </div>
        <div style={{width:"120px"}}><button className='btn m-2' style={{backgroundColor:"transparent"}} 
        onClick={onUpdate} >
        <img style={{ width:"20px"}} src="icons8-edit-50.png" alt='Edit' />
        </button></div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}} 
        onClick={onDelete}>
        <img style={{ width:"20px"}} src="icons8-delete-30.png" alt='Delete' />
        </button></div>
    </div>
    </>
  )
}


export default TaskItem
