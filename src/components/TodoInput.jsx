import React, { useState } from 'react';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo , onClickUpdateButton } from '../redux/todoSlice';


const TodoInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.todos);
  const { idToUpdate, onClickUpdate } = selector;
  const onAdd = (event) => {
    event.preventDefault();
    setValue('');
    dispatch(addTodo(
      { title: value, }
    ));
  };
  const onEdit = (event) => {
    event.preventDefault();
    setValue('');
    dispatch(editTodo(
      { title: value, id: idToUpdate }
    ));
    dispatch(onClickUpdateButton(false));
  };
  return (
    <>

      <form className="row g-2 m-2">
        <div className="col-auto">

          <input type="text" className="form-control shadow" placeholder="Enter name of list"
            value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
        {!onClickUpdate ? <div className="col-auto">
          <button type='button' className="btn btn-primary mb-3" onClick={onAdd} >Add</button>
        </div> :
          <div className="col-auto">
            <button type='button' className="btn btn-primary mb-3" onClick={onEdit} >Update</button>
          </div>}
      </form>

      <TodoList />

    </>
  )
}

export default TodoInput
