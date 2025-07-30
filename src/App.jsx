import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';


function App() {
  const [newTodo, setNewTodo] = useState('Continue learning react concepts like: ');

  return (
    <div>
      <h1>My Todo 🌺</h1>
      <TodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
