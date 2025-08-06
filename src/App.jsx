import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {

    const newTodo = {
      id: Date.now(),
      title: title,
    }

    setTodoList([...todoList, newTodo])
  }

  return (
    <div>
      <h1>My Todo 🌺</h1>
      <TodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
