//action type
export const CREATE_TODO = 'CREATE_TODO';
//action creator
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo }
})
//action type
export const REMOVE_TODO = 'REMOVE_TODO';
//action creator
export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo }
})

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = todo => ({
    type: COMPLETE_TODO,
    payload: { todo }
})

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
})

export const LOAD_TODOS_COMPLETED = 'LOAD_TODOS_COMPLETED';
export const loadTodosCompleted = todos => ({
    type: LOAD_TODOS_COMPLETED,
    payload: { todos },
})

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
})