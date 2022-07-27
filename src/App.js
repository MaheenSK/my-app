
import TodoInput from './components/TodoInput';
import TaskInput from './components/TaskInput';
import React from 'react'


function App() {
  return (
    <div className="Container" style={{display:'flex', flexDirection:'row'}}>
      <div className="todo" style={{ width:'30vw'}} >
     <TodoInput/></div>
     <div className="task"style={{ width:'70vw'}}>
     <TaskInput/></div>
    </div>
  );
}

export default App;
