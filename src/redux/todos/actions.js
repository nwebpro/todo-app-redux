import {
	ADDED,
	TOGGLED,
	COLOR_SELECTED,
	DELETED,
	ALL_COMPLETED,
	CLEAR_COMPLETED,
} from './actionTypes';

export const added = (todo) => {
	return {
		type: ADDED,
		payload: todo,
	};
};

export const toggled = (todoId) => {
	return {
		type: TOGGLED,
		payload: todoId,
	};
};

export const colorSelected = (todoId, color) => {
	return {
		type: COLOR_SELECTED,
		payload: { todoId, color },
	};
};

export const deleted = (todoId) => {
	return {
		type: DELETED,
		payload: todoId,
	};
};

export const allCompleted = () => {
	return {
		type: ALL_COMPLETED,
	};
};

export const clearCompleted = () => {
	return {
		type: CLEAR_COMPLETED,
	};
};
