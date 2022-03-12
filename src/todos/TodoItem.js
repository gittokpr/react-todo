import React from 'react'
import './TodoItem.css'

function TodoItem({ todo, onRemoveClicked, onCompleteClicked }) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {todo.isCompleted ? null :
                    <button
                        onClick={() => onCompleteClicked(todo.id)}
                        className="completed-button">Mark As Completed
                    </button>
                }
                <button
                    onClick={() => onRemoveClicked(todo.id)}
                    className="remove-button">Remove</button>
            </div>
        </div>
    )
}

export default TodoItem