import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconsiler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistedReducer);