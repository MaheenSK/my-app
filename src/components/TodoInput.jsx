import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/actions';
import TodoList from './TodoList';

const TodoInput = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <>

      <form className="row g-2 m-2">
        <div className="col-auto">

          <input type="text" className="form-control shadow" placeholder="Enter name of list" value={name}
            onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={() => dispatch(addTodo(name), setName(''))} >Add</button>
        </div>
      </form>

      <TodoList />

      <div className="todoItems">
        {
          list.map((element) => {
            return (
            <div className="eachItem" key={element.id}>
              <div style={{ display: "flex", width: "350px" }} className='shadow mx-2'>
                <div style={{ width: "200px" }} className='m-2'>
                  {element.data}
                </div>
                <div><button className='btn m-2' style={{ backgroundColor: "transparent" }}>
                  <img style={{ width: "20px" }} src="icons8-edit-50.png" alt="Edit"/>
                </button></div>
                <div><button className='btn m-2' style={{ backgroundColor: "transparent" }}
                  onClick={() => dispatch(deleteTodo(element.id))}>
                  <img style={{ width: "20px" }} src="icons8-delete-30.png" alt="Delete" />
                </button></div>
              </div></div>
            )
          })
        }
      </div>
    </>
  )
}

export default TodoInput
