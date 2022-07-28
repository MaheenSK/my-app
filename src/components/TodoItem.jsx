import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, onClickUpdateButton, setIdToUpdate, setIdToShow, setTodoClicked } from '../redux/todoSlice';

const TodoItem = ({ id, title, clicked }) => {
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
      <div style={{ display: "flex", width: "350px", backgroundColor:clicked?"rgba(207, 207, 207, 0.3)":"white" }} className='shadow mx-2' onClick={() => {  dispatch(setIdToShow(id)) ;dispatch(setTodoClicked({clicked:!clicked,}));}} >
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
