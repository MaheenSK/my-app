import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, onClickUpdateButton, setIdToUpdate, setIdToShow, setTodoClicked } from '../redux/todoSlice';

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(onClickUpdateButton(true));
    dispatch(setIdToUpdate(id));
  };
  const onDelete = () => {
    dispatch(deleteTodo({ id: id }))
  };

  return (

    <>
      <div style={{ display: "flex", width: "350px" }} className='shadow mx-2' onClick={() => { dispatch(setTodoClicked(true)); dispatch(setIdToShow(id)) }} >
        <div style={{ width: "200px" }} className='m-2'>
          {title}
        </div>
        <div><button className='btn m-2' style={{ backgroundColor: "transparent" }} onClick={onUpdate}>
          <img style={{ width: "20px" }} src="icons8-edit-50.png" alt='Edit' />
        </button></div>
        <div><button className='btn m-2' style={{ backgroundColor: "transparent" }} onClick={onDelete}>
          <img style={{ width: "20px" }} src="icons8-delete-30.png" alt='Delete' />
        </button></div>
      </div>
    </>
  )
}


export default TodoItem
