import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import { getTodos, getTodosLoading } from './selectors'
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos = [], isLoading, onRemoveClicked, onCompleteClicked, startLoadingProcess }) => {

    useEffect(() => {
        startLoadingProcess();
    }, []);

    const loading = <div>Loading in progress...</div>
    const newLocal = <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo, key) => <TodoItem
            key={key}
            todo={todo}
            onRemoveClicked={onRemoveClicked}
            onCompleteClicked={onCompleteClicked} />)}
    </div>
    return isLoading ? loading : newLocal;
}

const mapStateToProps = (state) => ({
    todos: getTodos(state),
    isLoading: getTodosLoading(state),
})

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: id => dispatch(removeTodoRequest(id)),
    onCompleteClicked: id => dispatch(completeTodoRequest(id)),
    startLoadingProcess: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);