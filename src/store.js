import { createStore } from 'redux';
import { counter } from './reducers';

//Default state
const defaultState = {
    count: 42,
};

export const store = createStore(counter, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   
);
