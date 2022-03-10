import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from './actions'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos = [], onRemoveClicked }) => {
    return (
        <div className='list-wrapper'>
            <NewTodoForm />
            {todos.map((todo, key) => <TodoItem key={key} todo={todo} onRemoveClicked={onRemoveClicked} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);