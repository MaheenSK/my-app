import React, { useState } from 'react';
import TaskList from './TaskList';
import { useDispatch } from 'react-redux';
import { addTask} from '../redux/taskSlice';

const TaskInput = () => {
  const [value, setValue]= useState('');
  const dispatch=useDispatch();
  const onSubmit=(event)=>{
    event.preventDefault();
    setValue('');
    dispatch(addTask(
      {title:value}
    ));
  }

  return (
    <>

      <form className="row g-2 m-2" onSubmit={onSubmit}>
        <div className="col-auto">

          <input type="text" className="form-control shadow" placeholder="Enter Title" 
          value={value} onChange={(event)=>setValue(event.target.value)} />
        </div>
        <div className="col-auto">

        <input type="date" className="form-control shadow"   />
         </div>
        <div className="col-auto">
          <button type='submit' className="btn btn-primary mb-3"  >Add Todo</button>
        </div>
       
      </form>
      <TaskList/>
    </>
  )
}

export default TaskInput
