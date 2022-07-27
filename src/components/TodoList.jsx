import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const selector = useSelector((state) => state.todos);
  const { todoList } = selector;

  return (
    <>
      <div style={{ display: "flex", width: "350px"}} className='mx-2 shadow'>
        <div style={{ width: "210px" }} className='m-2'>
          <b>Name</b>
        </div>
        <div style={{ width: "45px" }} className='m-2'>
          <b>Edit</b>
        </div>
        <div className='m-2'>
          <b>Delete</b>
        </div>
      </div>
      {todoList ? todoList.map((todo, index) =>
        <div key={index}>
          <TodoItem id={todo.id} title={todo.title} />
        </div>
      ) : null}
    </>
  )
}

export default TodoList
