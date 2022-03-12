import { COMPLETE_TODO, CREATE_TODO, LOAD_TODOS_COMPLETED, LOAD_TODOS_FAILURE, LOAD_TODOS_IN_PROGRESS, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {

    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo)
        }
        case REMOVE_TODO: {
            const { todo: removedTodo } = payload;
            return state.filter(todo => todo.id !== removedTodo.id);
        }
        case COMPLETE_TODO: {
            const { todo: updatedTodo } = payload;
            return state
                .map(todo => {
                    if (todo.id === updatedTodo.id) {
                        return updatedTodo;
                    }
                    return todo;
                });
        }
        case LOAD_TODOS_COMPLETED: {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_COMPLETED:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}