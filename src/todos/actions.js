//action type
export const CREATE_TODO = 'CREATE_TODO';
//action creator
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
})
//action type
export const REMOVE_TODO = 'REMOVE_TODO';
//action creator
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
})