import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo,deleteTodo, onClickUpdateButton , setIdToUpdate } from '../redux/todoSlice';

const TodoItem = ({id, title}) => {
  const dispatch=useDispatch();
  const onUpdate=()=>{
    dispatch(onClickUpdateButton(true));
    dispatch(setIdToUpdate(id));
  };
  const onDelete=()=>{
    dispatch(deleteTodo({id:id}))
  };
  return (
    
    <>
    <div style={{display:"flex", width:"350px"}} className='shadow mx-2'>
        <div style={{width:"200px"}} className='m-2'>
            {title}
        </div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}} onClick={onUpdate}>
        <img style={{ width:"20px"}} src="icons8-edit-50.png" />
        </button></div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}} onClick={onDelete}>
        <img style={{ width:"20px"}} src="icons8-delete-30.png" />
        </button></div>
    </div>
    </>
  )
}


export default TodoItem
