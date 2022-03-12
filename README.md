### install babel

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

### install react

npm install react react-dom

### install webpack

npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader

### install react-hot-loader

npm install react-hot-loader

## Redux

npm install redux react-redux

npm install redux-persist (to persist data)

it aims to solve props drilling, state sharing and globel state issues.
it coontains redux-store, redux-actions and reducer
Redux actions contains action string and payload containing action data.It explicitly define all the events that can occur in our application.
Redux handles what should happen to the redux store when an action occurs.
Components can only interact with the state by triggering Redux actions.

### Unidirectional Data Flow

            --------------> ui triggers action ----------
           |                                             | (reducer)
           |                                             |
           |                                             v
    components see updated state                state is updated
           ^                                             |
           |                                             |
           |                (read only)                  |
            ---------------------------------------------

## redux thunk

npm install redux-thunk redux-devtools-extension @babel/runtime

npm install --save-dev @babel/plugin-transform-runtime

            --------------> ui triggers action ----------------------------
           |                                             | (reducer)       |
           |                                             |            load data,etc(async)
           |                                             v                 |
    components see updated state                state is updated ----------
           ^                                             |
           |                                             |
           |                (read only)                  |
            ---------------------------------------------

## selectors

selectors give us a place to put logic for combining, filtering, transforming stored data.

### reselect

to be used when one selector needs to call another selector.
npm install reselect
