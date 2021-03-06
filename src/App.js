import "./App.css"
import { hot } from 'react-hot-loader';
import React from 'react';
import TodoList from "./todos/TodoList";

const App = () => {
    return (
        <div className="App">
            <TodoList />
        </div>
    )
}

export default hot(module)(App);