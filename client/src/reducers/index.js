import { combineReducers } from 'redux';
import employees from "./employees";
import search from './search';
import scroll from './scroll';
import mode from './mode';

const reducers = combineReducers({
    employees,
    search,
    scroll,
    mode
});

export default reducers;