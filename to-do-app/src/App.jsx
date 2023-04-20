import { useState } from 'react'

function App() {
  const [todos, setTodo] = useState([
  ])

  const addTodo = (title)=>{
    const newTodo = [...todos, {id: todos.length+1, title: title, completed: false}]
    setTodo(newTodo)
  }

  const updateTodo = (index)=>{
    const allTodo = [...todos]
    allTodo[index].completed = true
    setTodo(allTodo)
  }

  const deleteTodo = (index)=>{
    const delTodo = [...todos]
    delTodo.splice(index, 1)
    setTodo(delTodo)
  }

  return (
    
    <div className='bg-indigo-400'>
      <h1 className='text-2xl font-bold text-gray-700 flex justify-center mb-12'>Todo App</h1>
      <div className=' '>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo)=>{
          return (
            <Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          )
        })}
      </div>
    </div>
    
    
  )
}

const Todo = ({todo, updateTodo, deleteTodo})=>{
  return (
    <div className='flex justify-center mb-1' style={{
      textDecoration: todo.completed ? 'line-through' : ''
    }}>
      <h1 className='text-gray-800 px-2'>{todo.title}</h1>
      <button className='bg-blue-600 border-2 rounded-md px-1 py-1 border-gray-400 text-white mr-1' onClick={()=> updateTodo(todo.id-1)}>Complete</button>
      <button className='bg-blue-600 border-2 rounded-md px-1 py-1 border-gray-400 text-white' onClick={()=> deleteTodo(todo.id-1) }>Delete</button>
    </div>
  )
}

const TodoForm = ({addTodo})=>{
  const [value, setValue] = useState('')
  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }
  return (
    
    <form className='flex justify-center mb-10' onSubmit={handleSubmit}>
      <input className=' max-w-full mr-2 border-2 border-gray-400 rounded-md px-1 py-1' type="text" placeholder="add todo" value={value} onChange={handleChange}/>
      <button className=' bg-blue-600 border-2 rounded-md px-1 py-1 border-gray-400 text-white text-lg-20px' onClick={()=> addTodo(Todo.id + 1)}> Add </button>
    </form>
   
  )
}

export default App
