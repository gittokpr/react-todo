import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos = [] }) => {
    return (
        <div className='list-wrapper'>
            <NewTodoForm />
            {todos.map(todo => <TodoItem todo={todo} />)}
        </div>
    )
}

export default TodoList