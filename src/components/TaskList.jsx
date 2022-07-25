import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

const TaskList = () => {
  const selector=useSelector((state)=>state.tasks);
  const { taskList } = selector;
  return (
    <>
       <div style={{display:"flex", width:"900px"}} className='mx-2'>
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
        {taskList ? taskList.map((task, index) =>
        <div key={index}>
          <TaskItem id={task.id} title={task.title} completed={task.completed} date={task.date}/>
        </div>
      ) : null}
        
    </>
  )
}

export default TaskList
