import { combineReducers } from "redux";

import { ropaHombreReducer } from './products/ropaHombre-reducer';
import { ropaMujerReducer } from './products/ropaMujer-reducer';
import { categoriesReducer } from './categories/categories-reducer';

export const rootReducer = combineReducers({
    ropaHombre: ropaHombreReducer,
    ropaMujer: ropaMujerReducer,
    categories: categoriesReducer
});
