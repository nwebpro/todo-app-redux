import { combineReducers } from 'redux';
import todoReducer from './todos/reducer';
import filtersReducer from './filters/reducer';

const rootReducer = combineReducers({
	todos: todoReducer,
	filters: filtersReducer,
});

export default rootReducer;
