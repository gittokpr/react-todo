import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from './selectors'
import { completeTodoRequest, loadTodos, removeTodoRequest } from './thunks'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ inCompleteTodos, completedTodos, isLoading, onRemoveClicked, onCompleteClicked, startLoadingProcess }) => {

    useEffect(() => {
        startLoadingProcess();
    }, []);

    const loading = <div>Loading in progress...</div>
    const newLocal = <div className='list-wrapper'>
        <NewTodoForm />
        <h3>Incomplete:</h3>
        {inCompleteTodos.map((todo, key) => <TodoItem
            key={key}
            todo={todo}
            onRemoveClicked={onRemoveClicked}
            onCompleteClicked={onCompleteClicked} />)}
        <h3>Complete:</h3>
        {completedTodos.map((todo, key) => <TodoItem
            key={key}
            todo={todo}
            onRemoveClicked={onRemoveClicked}
            onCompleteClicked={onCompleteClicked} />)}
    </div>
    return isLoading ? loading : newLocal;
}

const mapStateToProps = (state) => ({
    inCompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
    isLoading: getTodosLoading(state),
})

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: id => dispatch(removeTodoRequest(id)),
    onCompleteClicked: id => dispatch(completeTodoRequest(id)),
    startLoadingProcess: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);