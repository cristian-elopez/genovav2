// import { configureStore } from '@reduxjs/toolkit';

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import { thunk } from 'redux-thunk';

const initialState = {};
const middleware = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

// export const store = configureStore({
//     reducer: rootReducer,
//     initialState
// });
