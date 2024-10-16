import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ todos, toggleComplete, startEditing, deleteTodo, editIndex, editValue, setEditValue, saveEdit }) => {  
  return (  
      <ul className="todo-list">  
          {todos.map((todo, index) => (  
              <Task  
                  key={index}  
                  todo={todo}  
                  index={index}  
                  toggleComplete={toggleComplete}  
                  startEditing={startEditing}  
                  deleteTodo={deleteTodo}  
                  editIndex={editIndex}  
                  editValue={editValue}  
                  setEditValue={setEditValue}  
                  saveEdit={saveEdit}
              />  
          ))}  
      </ul>  
  );  
};  

export default Tasks;  