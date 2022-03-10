import React from 'react'
import './TodoItem.css'

function TodoItem({ todo, onRemoveClicked }) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button className="completed-button">Mark As Completed</button>
                <button
                    onClick={() => onRemoveClicked(todo.text)}
                    className="remove-button">Remove</button>
            </div>
        </div>
    )
}

export default TodoItem