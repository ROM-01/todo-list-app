import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App() {
  return (
    <div>
      <h1>My Todo 🌺</h1>
      <TodoForm />
      <p>Continue learning react concepts like: </p>
      <TodoList />
    </div>
  );
}

export default App;
