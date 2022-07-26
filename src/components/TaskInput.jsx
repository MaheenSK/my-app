import React, { useState } from 'react';
import TaskList from './TaskList';
import { useDispatch , useSelector} from 'react-redux';
import { addTask, editTask, onClickUpdateButton} from '../redux/taskSlice';

const TaskInput = () => {
  const [value, setValue]= useState('');
  const [date, setDate]=useState();
  
  const dispatch=useDispatch();
  const selector = useSelector((state) => state.tasks);
  const { idToUpdate, onClickUpdate } = selector;
 
  const onAdd=(event)=>{
    event.preventDefault();
    setValue('');
    dispatch(addTask(
      {title:value, 
      date: date,
    }
    ));
   
  };
  const onEdit = (event) => {
    event.preventDefault();
    setValue('');
    dispatch(editTask(
      { title: value, id: idToUpdate }
    ));
    dispatch(onClickUpdateButton(false));
  };

  return (
    <>

      <form className="row g-2 m-2" >
        <div className="col-auto">

          <input type="text" className="form-control shadow" placeholder="Enter Title" 
          value={value} onChange={(event)=>setValue(event.target.value)} />
        </div>
        
         {!onClickUpdate ? <>
          <div className="col-auto">
        <input type="date" id="date" className="form-control shadow" onChange={(event)=>setDate(event.target.value)}
        />
         </div>
         <div className="col-auto">
          <button type='button' className="btn btn-primary mb-3" onClick={onAdd} >Add</button>
        </div> </>
        :
          <div className="col-auto">
            <button type='button' className="btn btn-primary mb-3" onClick={onEdit} >Update</button>
          </div>}
      </form>
      <TaskList/>
    </>
  )
}

export default TaskInput
