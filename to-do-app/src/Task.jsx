const Task =(props) => {
    const handleAdd = () => {
        setTodo([...todo, {id : todo.length + 1,title: newTask, completed : false}]);
        setNewTask("");
  };
    return(
        <div className="bg-blue-400" key={newTask.id}>
              <h4>{ props.newTask.title}</h4>
                <div>
                  {/* <button onClick={handleRemove}>Remove</button> */}
                  <button onClick={handleAdd}>Add task</button>
                </div>

            </div>

    )
};
export default Task;