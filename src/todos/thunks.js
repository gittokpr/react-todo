import { completeTodo, createTodo, loadTodosCompleted, loadTodosFailure, loadTodosInProgress, removeTodo } from "./actions";

export const displayAlert = (text) => () => {
    alert(`${text}`)
}

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosCompleted(todos));
    } catch (error) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(error));
    }
}

export const createTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text })
        const response = await fetch('http://localhost:8080/todos', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body,
        })
        const todo = await response.json()
        dispatch(createTodo(todo))
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}

export const completeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const updatedTodo = await response.json();
        dispatch(completeTodo(updatedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}