import { combineReducers } from 'redux';
import employees from "./employees";
import search from './search';
import scroll from './scroll';

const reducers = combineReducers({
    employees,
    search,
    scroll
});

export default reducers;