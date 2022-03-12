import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { completeTodo, removeTodo } from './actions'
import NewTodoForm from './NewTodoForm'
import { displayAlert, loadTodos } from './thunks'
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
    todos: state.todos,
    isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text)),
    onCompleteClicked: text => dispatch(completeTodo(text)),
    startLoadingProcess: () => dispatch(loadTodos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);