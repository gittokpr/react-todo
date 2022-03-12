import { COMPLETE_TODO, CREATE_TODO, LOAD_TODOS_COMPLETED, LOAD_TODOS_FAILURE, LOAD_TODOS_IN_PROGRESS, REMOVE_TODO } from './actions';

const initialState = {
    isLoading: false,
    data: [],
}

export const todos = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo),
            }
        }
        case REMOVE_TODO: {
            const { todo: removedTodo } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== removedTodo.id)
            };
        }
        case COMPLETE_TODO: {
            const { todo: updatedTodo } = payload;
            return {
                ...state,
                data: state.data
                    .map(todo => {
                        if (todo.id === updatedTodo.id) {
                            return updatedTodo;
                        }
                        return todo;
                    })
            };
        }
        case LOAD_TODOS_COMPLETED: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            };
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

// export const isLoading = (state = false, action) => {
//     const { type } = action;

//     switch (type) {
//         case LOAD_TODOS_IN_PROGRESS:
//             return true;
//         case LOAD_TODOS_COMPLETED:
//         case LOAD_TODOS_FAILURE:
//             return false;
//         default:
//             return state;
//     }
// }