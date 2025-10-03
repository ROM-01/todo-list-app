export const actions = {
    fetchTodos: 'fetchTodos',
    loadTodos: 'loadTodos',
    setLoadError: 'setLoadError',
    startRequest: 'startRequest',
    addTodo: 'addTodo',
    endRequest: 'endRequest',
    updateTodo: 'updateTodo',
    completeTodo: 'completeTodo',
    revertTodo: 'revertTodo',
    clearError: 'clearError',
};

export const initialState = {
    todoList: [],
    isLoading: false,
    isSaving: false,
    errorMessage: '',
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.fetchTodos:
            return { ...state, isLoading: true };

        case actions.loadTodos:
            return {
                ...state,
                todoList: action.records.map((record) => {
                    const todo = { id: record.id, ...record.fields };
                    if (!todo.isCompleted) todo.isCompleted = false;
                    return todo;
                }),
                isLoading: false,
            };

        case actions.setLoadError:
            return { ...state, errorMessage: action.error.message, isLoading: false };

        case actions.startRequest:
            return { ...state, isSaving: true };

        case actions.addTodo: {
            const record = action.records[0];
            const savedTodo = { id: record.id, ...record.fields };
            if (!savedTodo.isCompleted) savedTodo.isCompleted = false;
            return {
                ...state,
                todoList: [...state.todoList, savedTodo],
                isSaving: false,
            };
        }

        case actions.endRequest:
            return { ...state, isLoading: false, isSaving: false };

        case actions.revertTodo:
        case actions.updateTodo: {
            const updatedTodos = state.todoList.map((t) =>
                t.id === action.editedTodo.id ? action.editedTodo : t
            );
            const updatedState = { ...state, todoList: updatedTodos };
            if (action.error) {
                updatedState.errorMessage = action.error.message;
            }
            return updatedState;
        }

        case actions.completeTodo: {
            const updatedTodos = state.todoList.map((t) =>
                t.id === action.id ? { ...t, isCompleted: !t.isCompleted } : t
            );
            return { ...state, todoList: updatedTodos };
        }

        case actions.clearError:
            return { ...state, errorMessage: '' };

        default:
            return state;
    }
}
