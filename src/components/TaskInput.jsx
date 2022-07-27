import React, { useState } from 'react';
import TaskList from './TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, setTaskAdded, editTask, onClickItemUpdateButton } from '../redux/todoSlice';
const TaskInput = () => {

  const [value, setValue] = useState('');
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);
  const selector2 = useSelector((state) => state.todos);
  const { todoClicked } = selector2;
  const { idToItemUpdate, onClickItemUpdate } = selector;

  const onAdd = (event) => {
    event.preventDefault();
    setValue('');
    dispatch(addTask(
      {
        title: value,
        date: date,
      }
    ));
    dispatch(setTaskAdded(true));
  };

  const onEdit = (event) => {
    event.preventDefault();
    setValue('');
    dispatch(editTask(
      { title: value, id: idToItemUpdate }
    ));
    dispatch(onClickItemUpdateButton(false));

  };

  return (
    <>
      {todoClicked &&
        <div>
          <form className="row g-2 m-2" >

            <div className="col-auto">
              <input type="text" className="form-control shadow" placeholder="Enter Title"
                value={value} onChange={(event) => setValue(event.target.value)} />
            </div>

            {!onClickItemUpdate ?
              <>
                <div className="col-auto">
                  <input type="date" id="date" className="form-control shadow" onChange={(event) => setDate(event.target.value)} />
                </div>
                <div className="col-auto">
                  <button type='button' className="btn btn-primary mb-3" onClick={onAdd} >Add</button>
                </div>
              </>
              :
              <div className="col-auto">
                <button type='button' className="btn btn-primary mb-3" onClick={onEdit} >Update</button>
              </div>
            }
          </form>
          <TaskList /></div>}
    </>
  )
}

export default TaskInput
