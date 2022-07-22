import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const TodoItem = () => {
  return (
    
    <>
    <div style={{display:"flex", width:"350px"}} className='shadow mx-2'>
        <div style={{width:"200px"}} className='m-2'>
            list
        </div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}}>
        <img style={{ width:"20px"}} src="icons8-edit-50.png" />
        </button></div>
        <div><button className='btn m-2' style={{backgroundColor:"transparent"}}>
        <img style={{ width:"20px"}} src="icons8-delete-30.png" />
        </button></div>
    </div>
    </>
  )
}

export default TodoItem
