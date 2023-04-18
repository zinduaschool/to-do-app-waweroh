import { useState } from 'react'
import Task from './Task'

function App() {
  const [todo, setTodo] = useState([

    {
      id : 1,
      title: 'read',
      completed : false
    },

    {
      id : 2,
      title: 'jump',
      completed : true
    }
  ])

  const [newTask , setNewTask] = useState([]);
    
  //handleadding
  
  const handleRemove = (title) => {
    setTodo(todo.filter(todo => todo.id !== title));
    
  
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)};

  // const completeTask = (id) => {
  //   setTodo(todo.map(todoItem) => {
  //     if (todoItem.id === id) {
  //       return{ ...todoItem, completed : true};
  //     } else {
  //       return todoItem;

  //     }
  //   }));
  // };


  return (
    <div>
      <div>
        <input onChange={handleChange} value={newTask}></input>
        {/* handleAdd and handleRemove */}
        
      </div>

      <div>
        {todo.map((newTask) =>{
          return (
            <Task />
          );
        })}

        
            

          
        
      </div> 
    </div>
    
  )
}

export default App
