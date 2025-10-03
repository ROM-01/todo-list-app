import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import TodoForm from '../features/TodoForm';
import TodoList from '../features/TodoList/TodoList';
import TodosViewForm from '../features/TodosViewForm';
import { actions as todoActions } from '../reducers/todos.reducer';
import styles from './TodosPage.module.css';

function TodosPage({
  todoState,
  addTodo,
  completeTodo,
  updateTodo,
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
  dispatch,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const itemsPerPage = 15;

  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const filteredTodoList = todoState.todoList.filter(
    (todo) => !todo.isCompleted
  );

  const totalPages = Math.max(
    Math.ceil(filteredTodoList.length / itemsPerPage),
    1
  );

  const indexOfFirstTodo = (currentPage - 1) * itemsPerPage;
  const currentTodos = filteredTodoList.slice(
    indexOfFirstTodo,
    indexOfFirstTodo + itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: String(currentPage - 1) });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: String(currentPage + 1) });
    }
  };

  useEffect(() => {
    if (
      totalPages > 0 &&
      (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages)
    ) {
      navigate('/');
    }
  }, [currentPage, totalPages, navigate]);

  return (
    <div className={styles.todosPage}>
      <TodoForm onAddTodo={addTodo} isSaving={todoState.isSaving} />

      <TodoList
        todoList={currentTodos}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
        isLoading={todoState.isLoading}
      />

      <div className={styles.paginationControls}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <hr />
      <TodosViewForm
        sortField={sortField}
        setSortField={setSortField}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        queryString={queryString}
        setQueryString={setQueryString}
      />

      {todoState.errorMessage && (
        <div className={styles.errorMessage}>
          <hr />
          <p>{todoState.errorMessage}</p>
          <button onClick={() => dispatch({ type: todoActions.clearError })}>
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}

export default TodosPage;
