import React from 'react'
import { connect } from 'react-redux'
import { completeTodo, removeTodo } from './actions'
import NewTodoForm from './NewTodoForm'
import { displayAlert } from './thunks'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos = [], onRemoveClicked, onCompleteClicked, onAlertClicked }) => {
    return (
        <div className='list-wrapper'>
            <NewTodoForm />
            {todos.map((todo, key) => <TodoItem
                key={key}
                todo={todo}
                onRemoveClicked={onRemoveClicked}
                onCompleteClicked={onAlertClicked}
            />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text)),
    onCompleteClicked: text => dispatch(completeTodo(text)),
    onAlertClicked: text => dispatch(displayAlert(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);