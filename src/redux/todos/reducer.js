/* eslint-disable no-case-declarations */
import {
	ADDED,
	DELETED,
	TOGGLED,
	COLOR_SELECTED,
	ALL_COMPLETED,
	CLEAR_COMPLETED,
} from './actionTypes';
import { initialState } from './initialState';

const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
	return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED:
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.payload,
					completed: false,
				},
			];
		case TOGGLED:
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
			});
		case COLOR_SELECTED:
			const { todoId, color } = action.payload;
			return state.map((todo) => {
				if (todo.id !== todoId) {
					return todo;
				}
				return {
					...todo,
					color,
				};
			});
		case DELETED:
			return state.filter((todo) => todo.id !== action.payload);
		case ALL_COMPLETED:
			return state.map((todo) => ({
				...todo,
				completed: true,
			}));
		case CLEAR_COMPLETED:
			return state.filter((todo) => !todo.completed);

		default:
			return state;
	}
};

export default todoReducer;
