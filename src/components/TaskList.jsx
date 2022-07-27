import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const selector=useSelector((state)=>state.todos);
  const { todoList, taskAdded, idToShow } = selector;
  return (
    <div>
       <div style={{display:"flex", width:"900px"}} className='mx-2 shadow'>
       <div style={{width:"190px"}} className='m-2'>
            <b>Completed</b>
        </div>
        <div style={{width:"190px"}} className='m-2'>
            <b>Title</b>
        </div>
        <div style={{width:"400px"}} className='m-2'>
            <b>Date</b>
        </div>
        <div style={{width:"120px"}}className='m-2'>
            <b>Edit</b>
        </div>
          <div  className='m-2'>
            <b>Delete</b>
           </div>
        </div>
        {taskAdded && todoList.map((element) => {
        return (
          element.task.map((item, index) => {
            return (
              <div key={index}>
                {element.id === idToShow ? <TaskItem id={item.id} title={item.title} completed={item.completed} date={item.date} /> : null}
              </div>
            )

          })
        )
      })}
    </div>
  )
}

export default TaskList
