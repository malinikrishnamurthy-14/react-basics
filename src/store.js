//store

import {createStore, combineReducers} from 'redux';
import { mathReducer } from './reducers/mathReducer';
 
//reducers obj props contains all reducers - our case just 1
const rootReducer = combineReducers({
    mathReducer,
    })

//create the redux store
export const store = createStore(rootReducer);
