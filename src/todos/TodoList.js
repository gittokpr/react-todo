import React from 'react'
import { connect } from 'react-redux'
import { completeTodo, removeTodo } from './actions'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos = [], onRemoveClicked, onCompleteClicked }) => {
    return (
        <div className='list-wrapper'>
            <NewTodoForm />
            {todos.map((todo, key) => <TodoItem
                key={key}
                todo={todo}
                onRemoveClicked={onRemoveClicked}
                onCompleteClicked={onCompleteClicked}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);