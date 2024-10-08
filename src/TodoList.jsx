import React, { useState, useEffect } from 'react';
import Input from './Components/Input/Input';
import Tasks from './Components/Tasks/Tasks';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodos = [...todos, { text: inputValue.trim(), completed: false }];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editValue.trim();
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setEditIndex(null);
    setEditValue('');
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
          placeholder="Создать новую заметку..."
        />
        <button onClick={addTodo} className="create-button">СОЗДАТЬ</button>
      </div>
      <Tasks
        todos={todos}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
        editIndex={editIndex}
        editValue={editValue}
        setEditValue={setEditValue}
        saveEdit={saveEdit}
      />
    </div>
  );
};

export default TodoList;